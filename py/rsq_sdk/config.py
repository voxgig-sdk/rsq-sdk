# Rsq SDK configuration


def make_config():
    return {
        "main": {
            "name": "Rsq",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "http://api.unhcr.org/rsq/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "category": {},
                "country_of_asylum": {},
                "country_of_origin": {},
                "country_of_resettlement": {},
                "demographic": {},
                "departure": {},
                "helper": {},
                "region": {},
                "submission": {},
                "url_fetch": {},
                "year": {},
            },
        },
        "entity": {
      "category": {
        "fields": [
          {
            "active": True,
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "category",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/categories",
                "parts": [
                  "categories",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "country_of_asylum": {
        "fields": [
          {
            "active": True,
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "country_of_asylum",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/asylums",
                "parts": [
                  "asylums",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "country_of_origin": {
        "fields": [
          {
            "active": True,
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "country_of_origin",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/origins/departures",
                "parts": [
                  "origins",
                  "departures",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/origins/submissions",
                "parts": [
                  "origins",
                  "submissions",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/origins/demographics",
                "parts": [
                  "origins",
                  "demographics",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "country_of_resettlement": {
        "fields": [
          {
            "active": True,
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "country_of_resettlement",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/destinations",
                "parts": [
                  "destinations",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "demographic": {
        "fields": [
          {
            "active": True,
            "name": "destination",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "destination_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "femalesAdult",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "femalesSenior",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "femalesTotal",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "femalesUnderage",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "femalesUnknown",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "malesAdult",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "malesSenior",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "malesTotal",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "malesUnderage",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "malesUnknown",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "origin",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "origin_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "other",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "total",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
        ],
        "name": "demographic",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin_compare",
                      "orig": "origin_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "resettlement",
                      "orig": "resettlement",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/demographics",
                "parts": [
                  "demographics",
                ],
                "select": {
                  "exist": [
                    "language",
                    "origin",
                    "origin_compare",
                    "resettlement",
                    "year",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "departure": {
        "fields": [
          {
            "active": True,
            "name": "asylum",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "asylum_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "destination",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "destination_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "origin",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "origin_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "persons",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
        ],
        "name": "departure",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "asylum",
                      "orig": "asylum",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "asylum_compare",
                      "orig": "asylum_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "asylum_sort",
                      "orig": "asylum_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin_compare",
                      "orig": "origin_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin_sort",
                      "orig": "origin_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "persons_sort",
                      "orig": "persons_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "resettlement",
                      "orig": "resettlement",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "resettlement_sort",
                      "orig": "resettlement_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "year_sort",
                      "orig": "year_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/departures",
                "parts": [
                  "departures",
                ],
                "select": {
                  "exist": [
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
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "helper": {
        "fields": [],
        "name": "helper",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "resettlement",
                      "orig": "resettlement",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/export/csv",
                "parts": [
                  "export",
                  "csv",
                ],
                "select": {
                  "exist": [
                    "origin",
                    "resettlement",
                    "type",
                    "year",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "region": {
        "fields": [
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
        ],
        "name": "region",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/regions",
                "parts": [
                  "regions",
                ],
                "select": {
                  "exist": [
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "submission": {
        "fields": [
          {
            "active": True,
            "name": "asylum",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "asylum_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "destination",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "destination_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "origin",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "origin_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "persons",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
        ],
        "name": "submission",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "asylum",
                      "orig": "asylum",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "asylum_compare",
                      "orig": "asylum_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "asylum_sort",
                      "orig": "asylum_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin_compare",
                      "orig": "origin_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "origin_sort",
                      "orig": "origin_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "persons_sort",
                      "orig": "persons_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "resettlement",
                      "orig": "resettlement",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "resettlement_sort",
                      "orig": "resettlement_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "year_sort",
                      "orig": "year_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/submissions",
                "parts": [
                  "submissions",
                ],
                "select": {
                  "exist": [
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
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "url_fetch": {
        "fields": [
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "url_fetch",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "url_hash",
                      "orig": "url_hash",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/fetchUrl",
                "parts": [
                  "fetchUrl",
                ],
                "select": {
                  "exist": [
                    "language",
                    "url_hash",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "year": {
        "fields": [],
        "name": "year",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/years",
                "parts": [
                  "years",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/years/demographics",
                "parts": [
                  "years",
                  "demographics",
                ],
                "select": {
                  "$action": "demographic",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
