
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'http://api.unhcr.org/rsq/v1',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      category: {
      },

      country_of_asylum: {
      },

      country_of_origin: {
      },

      country_of_resettlement: {
      },

      demographic: {
      },

      departure: {
      },

      helper: {
      },

      region: {
      },

      submission: {
      },

      url_fetch: {
      },

      year: {
      },

    }
  }


  entity = {
    "category": {
      "fields": [
        {
          "name": "code",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/categories",
              "parts": [
                "categories"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "country_of_asylum": {
      "fields": [
        {
          "name": "code",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "region",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/asylums",
              "parts": [
                "asylums"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "country_of_origin": {
      "fields": [
        {
          "name": "code",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "region",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/origins/departures",
              "parts": [
                "origins",
                "departures"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            },
            {
              "args": {
                "query": [
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/origins/submissions",
              "parts": [
                "origins",
                "submissions"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 1
            },
            {
              "method": "GET",
              "orig": "/origins/demographics",
              "parts": [
                "origins",
                "demographics"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 2
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "country_of_resettlement": {
      "fields": [
        {
          "name": "code",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "region",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/destinations",
              "parts": [
                "destinations"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "demographic": {
      "fields": [
        {
          "name": "destination",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "destination_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "females_adult",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "females_senior",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 3
        },
        {
          "name": "females_total",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "females_underage",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 5
        },
        {
          "name": "females_unknown",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "males_adult",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "males_senior",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 8
        },
        {
          "name": "males_total",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 9
        },
        {
          "name": "males_underage",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 10
        },
        {
          "name": "males_unknown",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 11
        },
        {
          "name": "origin",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 12
        },
        {
          "name": "origin_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 13
        },
        {
          "name": "other",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 14
        },
        {
          "name": "total",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 15
        },
        {
          "name": "year",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 16
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "origin_compare",
                    "orig": "origin_compare",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "resettlement",
                    "orig": "resettlement",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/demographics",
              "parts": [
                "demographics"
              ],
              "select": {
                "exist": [
                  "language",
                  "origin",
                  "origin_compare",
                  "resettlement",
                  "year"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "departure": {
      "fields": [
        {
          "name": "asylum",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "asylum_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "destination",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "destination_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "origin",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "origin_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "person",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "year",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        }
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
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "asylum_compare",
                    "orig": "asylum_compare",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "asylum_sort",
                    "orig": "asylum_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "origin_compare",
                    "orig": "origin_compare",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "origin_sort",
                    "orig": "origin_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "persons_sort",
                    "orig": "persons_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "resettlement",
                    "orig": "resettlement",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "resettlement_sort",
                    "orig": "resettlement_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "year_sort",
                    "orig": "year_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/departures",
              "parts": [
                "departures"
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
                  "year_sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "resettlement",
                    "orig": "resettlement",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/export/csv",
              "parts": [
                "export",
                "csv"
              ],
              "select": {
                "exist": [
                  "origin",
                  "resettlement",
                  "type",
                  "year"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "region": {
      "fields": [
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/regions",
              "parts": [
                "regions"
              ],
              "select": {
                "exist": [
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "submission": {
      "fields": [
        {
          "name": "asylum",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "asylum_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "destination",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "destination_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "origin",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "origin_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "person",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "year",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        }
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
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "asylum_compare",
                    "orig": "asylum_compare",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "asylum_sort",
                    "orig": "asylum_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "origin_compare",
                    "orig": "origin_compare",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "origin_sort",
                    "orig": "origin_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "persons_sort",
                    "orig": "persons_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "resettlement",
                    "orig": "resettlement",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "resettlement_sort",
                    "orig": "resettlement_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "year_sort",
                    "orig": "year_sort",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/submissions",
              "parts": [
                "submissions"
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
                  "year_sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "url_fetch": {
      "fields": [
        {
          "name": "status",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "url_hash",
                    "orig": "url_hash",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/fetchUrl",
              "parts": [
                "fetchUrl"
              ],
              "select": {
                "exist": [
                  "language",
                  "url_hash"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
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
                "years"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            },
            {
              "method": "GET",
              "orig": "/years/demographics",
              "parts": [
                "years",
                "demographics"
              ],
              "select": {
                "$action": "demographic"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "index$": 1
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

