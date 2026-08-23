
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Rsq',
        slug: "rsq",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "http://api.unhcr.org/rsq/v1",

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
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        }
      ],
      "name": "category",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "region",
          "type": "`$STRING`"
        }
      ],
      "name": "country_of_asylum",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "region",
          "type": "`$STRING`"
        }
      ],
      "name": "country_of_origin",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            },
            {
              "args": {
                "query": [
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/origins/demographics",
              "parts": [
                "origins",
                "demographics"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "region",
          "type": "`$STRING`"
        }
      ],
      "name": "country_of_resettlement",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "type": "`$STRING`"
        },
        {
          "name": "destination_name",
          "type": "`$STRING`"
        },
        {
          "name": "femalesAdult",
          "type": "`$INTEGER`"
        },
        {
          "name": "femalesSenior",
          "type": "`$INTEGER`"
        },
        {
          "name": "femalesTotal",
          "type": "`$INTEGER`"
        },
        {
          "name": "femalesUnderage",
          "type": "`$INTEGER`"
        },
        {
          "name": "femalesUnknown",
          "type": "`$INTEGER`"
        },
        {
          "name": "malesAdult",
          "type": "`$INTEGER`"
        },
        {
          "name": "malesSenior",
          "type": "`$INTEGER`"
        },
        {
          "name": "malesTotal",
          "type": "`$INTEGER`"
        },
        {
          "name": "malesUnderage",
          "type": "`$INTEGER`"
        },
        {
          "name": "malesUnknown",
          "type": "`$INTEGER`"
        },
        {
          "name": "origin",
          "type": "`$STRING`"
        },
        {
          "name": "origin_name",
          "type": "`$STRING`"
        },
        {
          "name": "other",
          "type": "`$INTEGER`"
        },
        {
          "name": "total",
          "type": "`$INTEGER`"
        },
        {
          "name": "year",
          "type": "`$INTEGER`"
        }
      ],
      "name": "demographic",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "origin_compare",
                    "orig": "origin_compare",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "resettlement",
                    "orig": "resettlement",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
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
                "res": "`body.results`"
              }
            }
          ]
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
          "type": "`$STRING`"
        },
        {
          "name": "asylum_name",
          "type": "`$STRING`"
        },
        {
          "name": "destination",
          "type": "`$STRING`"
        },
        {
          "name": "destination_name",
          "type": "`$STRING`"
        },
        {
          "name": "origin",
          "type": "`$STRING`"
        },
        {
          "name": "origin_name",
          "type": "`$STRING`"
        },
        {
          "name": "persons",
          "type": "`$INTEGER`"
        },
        {
          "name": "year",
          "type": "`$INTEGER`"
        }
      ],
      "name": "departure",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "asylum",
                    "orig": "asylum",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "asylum_compare",
                    "orig": "asylum_compare",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "asylum_sort",
                    "orig": "asylum_sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "origin_compare",
                    "orig": "origin_compare",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "origin_sort",
                    "orig": "origin_sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "persons_sort",
                    "orig": "persons_sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "resettlement",
                    "orig": "resettlement",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "resettlement_sort",
                    "orig": "resettlement_sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "year_sort",
                    "orig": "year_sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "resettlement",
                    "orig": "resettlement",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "type": "`$STRING`"
        }
      ],
      "name": "region",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "type": "`$STRING`"
        },
        {
          "name": "asylum_name",
          "type": "`$STRING`"
        },
        {
          "name": "destination",
          "type": "`$STRING`"
        },
        {
          "name": "destination_name",
          "type": "`$STRING`"
        },
        {
          "name": "origin",
          "type": "`$STRING`"
        },
        {
          "name": "origin_name",
          "type": "`$STRING`"
        },
        {
          "name": "persons",
          "type": "`$INTEGER`"
        },
        {
          "name": "year",
          "type": "`$INTEGER`"
        }
      ],
      "name": "submission",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "asylum",
                    "orig": "asylum",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "asylum_compare",
                    "orig": "asylum_compare",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "asylum_sort",
                    "orig": "asylum_sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "origin_compare",
                    "orig": "origin_compare",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "origin_sort",
                    "orig": "origin_sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "persons_sort",
                    "orig": "persons_sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "resettlement",
                    "orig": "resettlement",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "resettlement_sort",
                    "orig": "resettlement_sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "year_sort",
                    "orig": "year_sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "name": "url_fetch",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "url_hash",
                    "orig": "url_hash",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/years",
              "parts": [
                "years"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
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
              }
            }
          ]
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

