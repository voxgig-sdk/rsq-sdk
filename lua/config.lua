-- Rsq SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Rsq",
      slug = "rsq",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "http://api.unhcr.org/rsq/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["category"] = {},
        ["country_of_asylum"] = {},
        ["country_of_resettlement"] = {},
        ["demographic"] = {},
        ["departure"] = {},
        ["helper"] = {},
        ["region"] = {},
        ["submission"] = {},
        ["url_fetch"] = {},
        ["year"] = {},
      },
    },
    entity = {
      ["category"] = {
        ["fields"] = {
          {
            ["name"] = "code",
            ["title"] = "Code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "category",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/categories",
                ["segments"] = {
                  {
                    ["lit"] = "categories",
                  },
                },
                ["parts"] = {
                  "categories",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["country_of_asylum"] = {
        ["fields"] = {
          {
            ["name"] = "code",
            ["title"] = "Code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "country_of_asylum",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/asylums",
                ["segments"] = {
                  {
                    ["lit"] = "asylums",
                  },
                },
                ["parts"] = {
                  "asylums",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["country_of_resettlement"] = {
        ["fields"] = {
          {
            ["name"] = "code",
            ["title"] = "Code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "country_of_resettlement",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/destinations",
                ["segments"] = {
                  {
                    ["lit"] = "destinations",
                  },
                },
                ["parts"] = {
                  "destinations",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["demographic"] = {
        ["fields"] = {
          {
            ["name"] = "code",
            ["title"] = "Code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "destination",
            ["title"] = "Destination",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "destination_name",
            ["title"] = "Destination Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "femalesAdult",
            ["title"] = "Females Adult",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "femalesSenior",
            ["title"] = "Females Senior",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "femalesTotal",
            ["title"] = "Females Total",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "femalesUnderage",
            ["title"] = "Females Underage",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "femalesUnknown",
            ["title"] = "Females Unknown",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "malesAdult",
            ["title"] = "Males Adult",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "malesSenior",
            ["title"] = "Males Senior",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "malesTotal",
            ["title"] = "Males Total",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "malesUnderage",
            ["title"] = "Males Underage",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "malesUnknown",
            ["title"] = "Males Unknown",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin",
            ["title"] = "Origin",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin_name",
            ["title"] = "Origin Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "other",
            ["title"] = "Other",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "total",
            ["title"] = "Total",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "year",
            ["title"] = "Year",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "demographic",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/demographics",
                ["segments"] = {
                  {
                    ["lit"] = "demographics",
                  },
                },
                ["parts"] = {
                  "demographics",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                    {
                      ["name"] = "origin",
                      ["orig"] = "origin",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "origin_compare",
                      ["orig"] = "origin_compare",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "resettlement",
                      ["orig"] = "resettlement",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "year",
                      ["orig"] = "year",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                    "origin",
                    "origin_compare",
                    "resettlement",
                    "year",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/origins/demographics",
                ["segments"] = {
                  {
                    ["lit"] = "origins",
                  },
                  {
                    ["lit"] = "demographics",
                  },
                },
                ["parts"] = {
                  "origins",
                  "demographics",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["departure"] = {
        ["fields"] = {
          {
            ["name"] = "asylum",
            ["title"] = "Asylum",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "asylum_name",
            ["title"] = "Asylum Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "code",
            ["title"] = "Code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "destination",
            ["title"] = "Destination",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "destination_name",
            ["title"] = "Destination Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin",
            ["title"] = "Origin",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin_name",
            ["title"] = "Origin Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "persons",
            ["title"] = "Persons",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "year",
            ["title"] = "Year",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "departure",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/departures",
                ["segments"] = {
                  {
                    ["lit"] = "departures",
                  },
                },
                ["parts"] = {
                  "departures",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "asylum",
                      ["orig"] = "asylum",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "asylum_compare",
                      ["orig"] = "asylum_compare",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "asylum_sort",
                      ["orig"] = "asylum_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                    {
                      ["name"] = "origin",
                      ["orig"] = "origin",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "origin_compare",
                      ["orig"] = "origin_compare",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "origin_sort",
                      ["orig"] = "origin_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "persons_sort",
                      ["orig"] = "persons_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "resettlement",
                      ["orig"] = "resettlement",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "resettlement_sort",
                      ["orig"] = "resettlement_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "year",
                      ["orig"] = "year",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "year_sort",
                      ["orig"] = "year_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/origins/departures",
                ["segments"] = {
                  {
                    ["lit"] = "origins",
                  },
                  {
                    ["lit"] = "departures",
                  },
                },
                ["parts"] = {
                  "origins",
                  "departures",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["helper"] = {
        ["fields"] = {},
        ["name"] = "helper",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/export/csv",
                ["segments"] = {
                  {
                    ["lit"] = "export",
                  },
                  {
                    ["lit"] = "csv",
                  },
                },
                ["parts"] = {
                  "export",
                  "csv",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "origin",
                      ["orig"] = "origin",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "resettlement",
                      ["orig"] = "resettlement",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "year",
                      ["orig"] = "year",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["region"] = {
        ["fields"] = {
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "region",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/regions",
                ["segments"] = {
                  {
                    ["lit"] = "regions",
                  },
                },
                ["parts"] = {
                  "regions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["submission"] = {
        ["fields"] = {
          {
            ["name"] = "asylum",
            ["title"] = "Asylum",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "asylum_name",
            ["title"] = "Asylum Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "code",
            ["title"] = "Code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "destination",
            ["title"] = "Destination",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "destination_name",
            ["title"] = "Destination Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin",
            ["title"] = "Origin",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin_name",
            ["title"] = "Origin Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "persons",
            ["title"] = "Persons",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "year",
            ["title"] = "Year",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "submission",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/submissions",
                ["segments"] = {
                  {
                    ["lit"] = "submissions",
                  },
                },
                ["parts"] = {
                  "submissions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "asylum",
                      ["orig"] = "asylum",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "asylum_compare",
                      ["orig"] = "asylum_compare",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "asylum_sort",
                      ["orig"] = "asylum_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                    {
                      ["name"] = "origin",
                      ["orig"] = "origin",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "origin_compare",
                      ["orig"] = "origin_compare",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "origin_sort",
                      ["orig"] = "origin_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "persons_sort",
                      ["orig"] = "persons_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "resettlement",
                      ["orig"] = "resettlement",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "resettlement_sort",
                      ["orig"] = "resettlement_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "year",
                      ["orig"] = "year",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "year_sort",
                      ["orig"] = "year_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/origins/submissions",
                ["segments"] = {
                  {
                    ["lit"] = "origins",
                  },
                  {
                    ["lit"] = "submissions",
                  },
                },
                ["parts"] = {
                  "origins",
                  "submissions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["url_fetch"] = {
        ["fields"] = {
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "url_fetch",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/fetchUrl",
                ["segments"] = {
                  {
                    ["lit"] = "fetchUrl",
                  },
                },
                ["parts"] = {
                  "fetchUrl",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "en",
                    },
                    {
                      ["name"] = "url_hash",
                      ["orig"] = "url_hash",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                    "url_hash",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["year"] = {
        ["fields"] = {},
        ["name"] = "year",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/years",
                ["segments"] = {
                  {
                    ["lit"] = "years",
                  },
                },
                ["parts"] = {
                  "years",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/years/demographics",
                ["segments"] = {
                  {
                    ["lit"] = "years",
                  },
                  {
                    ["lit"] = "demographics",
                  },
                },
                ["parts"] = {
                  "years",
                  "demographics",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "demographic",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
