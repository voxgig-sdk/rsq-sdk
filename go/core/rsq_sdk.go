package core

import (
	"fmt"

	vs "github.com/voxgig-sdk/rsq-sdk/go/utility/struct"
)

type RsqSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewRsqSDK(options map[string]any) *RsqSDK {
	sdk := &RsqSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *RsqSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *RsqSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *RsqSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *RsqSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

func (sdk *RsqSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}


// Category returns a Category entity bound to this client.
// Idiomatic usage: client.Category(nil).List(nil, nil) or
// client.Category(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) Category(data map[string]any) RsqEntity {
	return NewCategoryEntityFunc(sdk, data)
}


// CountryOfAsylum returns a CountryOfAsylum entity bound to this client.
// Idiomatic usage: client.CountryOfAsylum(nil).List(nil, nil) or
// client.CountryOfAsylum(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) CountryOfAsylum(data map[string]any) RsqEntity {
	return NewCountryOfAsylumEntityFunc(sdk, data)
}


// CountryOfOrigin returns a CountryOfOrigin entity bound to this client.
// Idiomatic usage: client.CountryOfOrigin(nil).List(nil, nil) or
// client.CountryOfOrigin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) CountryOfOrigin(data map[string]any) RsqEntity {
	return NewCountryOfOriginEntityFunc(sdk, data)
}


// CountryOfResettlement returns a CountryOfResettlement entity bound to this client.
// Idiomatic usage: client.CountryOfResettlement(nil).List(nil, nil) or
// client.CountryOfResettlement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) CountryOfResettlement(data map[string]any) RsqEntity {
	return NewCountryOfResettlementEntityFunc(sdk, data)
}


// Demographic returns a Demographic entity bound to this client.
// Idiomatic usage: client.Demographic(nil).List(nil, nil) or
// client.Demographic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) Demographic(data map[string]any) RsqEntity {
	return NewDemographicEntityFunc(sdk, data)
}


// Departure returns a Departure entity bound to this client.
// Idiomatic usage: client.Departure(nil).List(nil, nil) or
// client.Departure(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) Departure(data map[string]any) RsqEntity {
	return NewDepartureEntityFunc(sdk, data)
}


// Helper returns a Helper entity bound to this client.
// Idiomatic usage: client.Helper(nil).List(nil, nil) or
// client.Helper(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) Helper(data map[string]any) RsqEntity {
	return NewHelperEntityFunc(sdk, data)
}


// Region returns a Region entity bound to this client.
// Idiomatic usage: client.Region(nil).List(nil, nil) or
// client.Region(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) Region(data map[string]any) RsqEntity {
	return NewRegionEntityFunc(sdk, data)
}


// Submission returns a Submission entity bound to this client.
// Idiomatic usage: client.Submission(nil).List(nil, nil) or
// client.Submission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) Submission(data map[string]any) RsqEntity {
	return NewSubmissionEntityFunc(sdk, data)
}


// UrlFetch returns a UrlFetch entity bound to this client.
// Idiomatic usage: client.UrlFetch(nil).List(nil, nil) or
// client.UrlFetch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) UrlFetch(data map[string]any) RsqEntity {
	return NewUrlFetchEntityFunc(sdk, data)
}


// Year returns a Year entity bound to this client.
// Idiomatic usage: client.Year(nil).List(nil, nil) or
// client.Year(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *RsqSDK) Year(data map[string]any) RsqEntity {
	return NewYearEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *RsqSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewRsqSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
