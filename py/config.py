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
            "auth": {
                "prefix": "Bearer",
            },
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
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "category",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "country_of_asylum",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "country_of_origin",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 1,
              },
              {
                "method": "GET",
                "orig": "/origins/demographics",
                "parts": [
                  "origins",
                  "demographics",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 2,
              },
            ],
            "input": "data",
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
            "name": "code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "country_of_resettlement",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "destination",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "destination_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "females_adult",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "females_senior",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "females_total",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "females_underage",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "females_unknown",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "males_adult",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "males_senior",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "males_total",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "males_underage",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "males_unknown",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "origin",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "origin_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "other",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "total",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 16,
          },
        ],
        "name": "demographic",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin_compare",
                      "orig": "origin_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "resettlement",
                      "orig": "resettlement",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "asylum",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "asylum_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "destination",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "destination_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "origin",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "origin_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "person",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
        ],
        "name": "departure",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "asylum",
                      "orig": "asylum",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "asylum_compare",
                      "orig": "asylum_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "asylum_sort",
                      "orig": "asylum_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin_compare",
                      "orig": "origin_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin_sort",
                      "orig": "origin_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "persons_sort",
                      "orig": "persons_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "resettlement",
                      "orig": "resettlement",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "resettlement_sort",
                      "orig": "resettlement_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "year_sort",
                      "orig": "year_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "resettlement",
                      "orig": "resettlement",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "region",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "asylum",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "asylum_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "destination",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "destination_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "origin",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "origin_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "person",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "year",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
        ],
        "name": "submission",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "asylum",
                      "orig": "asylum",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "asylum_compare",
                      "orig": "asylum_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "asylum_sort",
                      "orig": "asylum_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin_compare",
                      "orig": "origin_compare",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "origin_sort",
                      "orig": "origin_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "persons_sort",
                      "orig": "persons_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "resettlement",
                      "orig": "resettlement",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "resettlement_sort",
                      "orig": "resettlement_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "reqd": False,
                      "type": "`$ARRAY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "year_sort",
                      "orig": "year_sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "url_fetch",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "url_hash",
                      "orig": "url_hash",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/years",
                "parts": [
                  "years",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
              {
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
                "active": True,
                "args": {},
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
