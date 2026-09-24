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
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
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
								"kind": "http",
								"method": "GET",
								"orig": "/categories",
								"segments": []any{
									map[string]any{
										"lit": "categories",
									},
								},
								"parts": []any{
									"categories",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
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
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
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
								"kind": "http",
								"method": "GET",
								"orig": "/asylums",
								"segments": []any{
									map[string]any{
										"lit": "asylums",
									},
								},
								"parts": []any{
									"asylums",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
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
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
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
								"kind": "http",
								"method": "GET",
								"orig": "/destinations",
								"segments": []any{
									map[string]any{
										"lit": "destinations",
									},
								},
								"parts": []any{
									"destinations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
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
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination",
						"title": "Destination",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination_name",
						"title": "Destination Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "femalesAdult",
						"title": "Females Adult",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "femalesSenior",
						"title": "Females Senior",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "femalesTotal",
						"title": "Females Total",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "femalesUnderage",
						"title": "Females Underage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "femalesUnknown",
						"title": "Females Unknown",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesAdult",
						"title": "Males Adult",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesSenior",
						"title": "Males Senior",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesTotal",
						"title": "Males Total",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesUnderage",
						"title": "Males Underage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "malesUnknown",
						"title": "Males Unknown",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_name",
						"title": "Origin Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "other",
						"title": "Other",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total",
						"title": "Total",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
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
								"kind": "http",
								"method": "GET",
								"orig": "/demographics",
								"segments": []any{
									map[string]any{
										"lit": "demographics",
									},
								},
								"parts": []any{
									"demographics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "origin",
											"orig": "origin",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "origin_compare",
											"orig": "origin_compare",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "resettlement",
											"orig": "resettlement",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"origins",
									"demographics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Asylum",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "asylum_name",
						"title": "Asylum Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination",
						"title": "Destination",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination_name",
						"title": "Destination Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_name",
						"title": "Origin Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "persons",
						"title": "Persons",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
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
								"kind": "http",
								"method": "GET",
								"orig": "/departures",
								"segments": []any{
									map[string]any{
										"lit": "departures",
									},
								},
								"parts": []any{
									"departures",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "asylum",
											"orig": "asylum",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "asylum_compare",
											"orig": "asylum_compare",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "asylum_sort",
											"orig": "asylum_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "origin",
											"orig": "origin",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "origin_compare",
											"orig": "origin_compare",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "origin_sort",
											"orig": "origin_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "persons_sort",
											"orig": "persons_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "resettlement",
											"orig": "resettlement",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resettlement_sort",
											"orig": "resettlement_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "year_sort",
											"orig": "year_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"origins",
									"departures",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
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
								"parts": []any{
									"export",
									"csv",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "origin",
											"orig": "origin",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resettlement",
											"orig": "resettlement",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
						"title": "Name",
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
								"kind": "http",
								"method": "GET",
								"orig": "/regions",
								"segments": []any{
									map[string]any{
										"lit": "regions",
									},
								},
								"parts": []any{
									"regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
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
						"title": "Asylum",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "asylum_name",
						"title": "Asylum Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination",
						"title": "Destination",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "destination_name",
						"title": "Destination Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_name",
						"title": "Origin Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "persons",
						"title": "Persons",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
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
								"kind": "http",
								"method": "GET",
								"orig": "/submissions",
								"segments": []any{
									map[string]any{
										"lit": "submissions",
									},
								},
								"parts": []any{
									"submissions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "asylum",
											"orig": "asylum",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "asylum_compare",
											"orig": "asylum_compare",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "asylum_sort",
											"orig": "asylum_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "origin",
											"orig": "origin",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "origin_compare",
											"orig": "origin_compare",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "origin_sort",
											"orig": "origin_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "persons_sort",
											"orig": "persons_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "resettlement",
											"orig": "resettlement",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resettlement_sort",
											"orig": "resettlement_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "year_sort",
											"orig": "year_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"origins",
									"submissions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
									},
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
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
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
								"kind": "http",
								"method": "GET",
								"orig": "/fetchUrl",
								"segments": []any{
									map[string]any{
										"lit": "fetchUrl",
									},
								},
								"parts": []any{
									"fetchUrl",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "url_hash",
											"orig": "url_hash",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"url_hash",
									},
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
								"kind": "http",
								"method": "GET",
								"orig": "/years",
								"segments": []any{
									map[string]any{
										"lit": "years",
									},
								},
								"parts": []any{
									"years",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"years",
									"demographics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "demographic",
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
