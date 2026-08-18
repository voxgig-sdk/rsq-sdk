package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Rsq",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "http://api.unhcr.org/rsq/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"category": map[string]any{},
				"country_of_asylum": map[string]any{},
				"country_of_origin": map[string]any{},
				"country_of_resettlement": map[string]any{},
				"demographic": map[string]any{},
				"departure": map[string]any{},
				"helper": map[string]any{},
				"region": map[string]any{},
				"submission": map[string]any{},
				"url_fetch": map[string]any{},
				"year": map[string]any{},
			},
		},
		"entity": map[string]any{
			"category": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
				},
				"name": "category",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/categories",
								"parts": []any{
									"categories",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"country_of_asylum": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"type": "`$STRING`",
					},
				},
				"name": "country_of_asylum",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/asylums",
								"parts": []any{
									"asylums",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"country_of_origin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"type": "`$STRING`",
					},
				},
				"name": "country_of_origin",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/origins/departures",
								"parts": []any{
									"origins",
									"departures",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/origins/submissions",
								"parts": []any{
									"origins",
									"submissions",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/origins/demographics",
								"parts": []any{
									"origins",
									"demographics",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"country_of_resettlement": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"type": "`$STRING`",
					},
				},
				"name": "country_of_resettlement",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/destinations",
								"parts": []any{
									"destinations",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"demographic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "destination",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "femalesAdult",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "femalesSenior",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "femalesTotal",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "femalesUnderage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "femalesUnknown",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesAdult",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesSenior",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesTotal",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesUnderage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesUnknown",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "origin",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "other",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"type": "`$INTEGER`",
					},
				},
				"name": "demographic",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "origin",
											"orig": "origin",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "origin_compare",
											"orig": "origin_compare",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "resettlement",
											"orig": "resettlement",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "year",
											"orig": "year",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/demographics",
								"parts": []any{
									"demographics",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"origin",
										"origin_compare",
										"resettlement",
										"year",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"departure": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asylum",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "asylum_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "persons",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"type": "`$INTEGER`",
					},
				},
				"name": "departure",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "asylum",
											"orig": "asylum",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "asylum_compare",
											"orig": "asylum_compare",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "asylum_sort",
											"orig": "asylum_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "origin",
											"orig": "origin",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "origin_compare",
											"orig": "origin_compare",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "origin_sort",
											"orig": "origin_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "persons_sort",
											"orig": "persons_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "resettlement",
											"orig": "resettlement",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "resettlement_sort",
											"orig": "resettlement_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "year",
											"orig": "year",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "year_sort",
											"orig": "year_sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/departures",
								"parts": []any{
									"departures",
								},
								"select": map[string]any{
									"exist": []any{
										"asylum",
										"asylum_compare",
										"asylum_sort",
										"language",
										"origin",
										"origin_compare",
										"origin_sort",
										"page",
										"persons_sort",
										"resettlement",
										"resettlement_sort",
										"year",
										"year_sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"helper": map[string]any{
				"fields": []any{},
				"name": "helper",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "origin",
											"orig": "origin",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "resettlement",
											"orig": "resettlement",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "year",
											"orig": "year",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/export/csv",
								"parts": []any{
									"export",
									"csv",
								},
								"select": map[string]any{
									"exist": []any{
										"origin",
										"resettlement",
										"type",
										"year",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"region": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
				},
				"name": "region",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/regions",
								"parts": []any{
									"regions",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"submission": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asylum",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "asylum_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "persons",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"type": "`$INTEGER`",
					},
				},
				"name": "submission",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "asylum",
											"orig": "asylum",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "asylum_compare",
											"orig": "asylum_compare",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "asylum_sort",
											"orig": "asylum_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "origin",
											"orig": "origin",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "origin_compare",
											"orig": "origin_compare",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "origin_sort",
											"orig": "origin_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "persons_sort",
											"orig": "persons_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "resettlement",
											"orig": "resettlement",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "resettlement_sort",
											"orig": "resettlement_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "year",
											"orig": "year",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "year_sort",
											"orig": "year_sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/submissions",
								"parts": []any{
									"submissions",
								},
								"select": map[string]any{
									"exist": []any{
										"asylum",
										"asylum_compare",
										"asylum_sort",
										"language",
										"origin",
										"origin_compare",
										"origin_sort",
										"page",
										"persons_sort",
										"resettlement",
										"resettlement_sort",
										"year",
										"year_sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"url_fetch": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"name": "url_fetch",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "url_hash",
											"orig": "url_hash",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/fetchUrl",
								"parts": []any{
									"fetchUrl",
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"url_hash",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"year": map[string]any{
				"fields": []any{},
				"name": "year",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/years",
								"parts": []any{
									"years",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/years/demographics",
								"parts": []any{
									"years",
									"demographics",
								},
								"select": map[string]any{
									"$action": "demographic",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
