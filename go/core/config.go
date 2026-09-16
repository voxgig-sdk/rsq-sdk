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
			"slug": "rsq",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
								"segments": []any{
									map[string]any{
										"lit": "categories",
									},
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
								"parts": []any{
									"categories",
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
								"segments": []any{
									map[string]any{
										"lit": "asylums",
									},
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
								"parts": []any{
									"asylums",
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
								"segments": []any{
									map[string]any{
										"lit": "origins",
									},
									map[string]any{
										"lit": "departures",
									},
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
								"parts": []any{
									"origins",
									"departures",
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
								"segments": []any{
									map[string]any{
										"lit": "origins",
									},
									map[string]any{
										"lit": "submissions",
									},
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
								"parts": []any{
									"origins",
									"submissions",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/origins/demographics",
								"segments": []any{
									map[string]any{
										"lit": "origins",
									},
									map[string]any{
										"lit": "demographics",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"origins",
									"demographics",
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
								"segments": []any{
									map[string]any{
										"lit": "destinations",
									},
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
								"parts": []any{
									"destinations",
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
								"segments": []any{
									map[string]any{
										"lit": "demographics",
									},
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
								"parts": []any{
									"demographics",
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
								"segments": []any{
									map[string]any{
										"lit": "departures",
									},
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
								"parts": []any{
									"departures",
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
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
									map[string]any{
										"lit": "csv",
									},
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
								"parts": []any{
									"export",
									"csv",
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
								"segments": []any{
									map[string]any{
										"lit": "regions",
									},
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
								"parts": []any{
									"regions",
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
								"segments": []any{
									map[string]any{
										"lit": "submissions",
									},
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
								"parts": []any{
									"submissions",
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
								"segments": []any{
									map[string]any{
										"lit": "fetchUrl",
									},
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
								"parts": []any{
									"fetchUrl",
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
								"segments": []any{
									map[string]any{
										"lit": "years",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"years",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/years/demographics",
								"segments": []any{
									map[string]any{
										"lit": "years",
									},
									map[string]any{
										"lit": "demographics",
									},
								},
								"select": map[string]any{
									"$action": "demographic",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"years",
									"demographics",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
