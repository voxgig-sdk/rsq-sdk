<?php
declare(strict_types=1);

// Rsq SDK configuration

class RsqConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Rsq",
                "slug" => "rsq",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "http://api.unhcr.org/rsq/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "category" => [],
                    "country_of_asylum" => [],
                    "country_of_origin" => [],
                    "country_of_resettlement" => [],
                    "demographic" => [],
                    "departure" => [],
                    "helper" => [],
                    "region" => [],
                    "submission" => [],
                    "url_fetch" => [],
                    "year" => [],
                ],
            ],
            "entity" => [
        'category' => [
          'fields' => [
            [
              'name' => 'code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'category',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/categories',
                  'segments' => [
                    [
                      'lit' => 'categories',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'categories',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'country_of_asylum' => [
          'fields' => [
            [
              'name' => 'code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'region',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'country_of_asylum',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/asylums',
                  'segments' => [
                    [
                      'lit' => 'asylums',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'asylums',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'country_of_origin' => [
          'fields' => [
            [
              'name' => 'code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'region',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'country_of_origin',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/origins/departures',
                  'segments' => [
                    [
                      'lit' => 'origins',
                    ],
                    [
                      'lit' => 'departures',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'origins',
                    'departures',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/origins/submissions',
                  'segments' => [
                    [
                      'lit' => 'origins',
                    ],
                    [
                      'lit' => 'submissions',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'origins',
                    'submissions',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/origins/demographics',
                  'segments' => [
                    [
                      'lit' => 'origins',
                    ],
                    [
                      'lit' => 'demographics',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'origins',
                    'demographics',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'country_of_resettlement' => [
          'fields' => [
            [
              'name' => 'code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'region',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'country_of_resettlement',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/destinations',
                  'segments' => [
                    [
                      'lit' => 'destinations',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'destinations',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'demographic' => [
          'fields' => [
            [
              'name' => 'destination',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'destination_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'femalesAdult',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'femalesSenior',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'femalesTotal',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'femalesUnderage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'femalesUnknown',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'malesAdult',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'malesSenior',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'malesTotal',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'malesUnderage',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'malesUnknown',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'origin',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'origin_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'other',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'total',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'year',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'demographic',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'origin',
                        'orig' => 'origin',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'origin_compare',
                        'orig' => 'origin_compare',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'resettlement',
                        'orig' => 'resettlement',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'year',
                        'orig' => 'year',
                        'type' => '`$ARRAY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/demographics',
                  'segments' => [
                    [
                      'lit' => 'demographics',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                      'origin',
                      'origin_compare',
                      'resettlement',
                      'year',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                  'parts' => [
                    'demographics',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'departure' => [
          'fields' => [
            [
              'name' => 'asylum',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'asylum_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'destination',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'destination_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'origin',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'origin_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'persons',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'year',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'departure',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'asylum',
                        'orig' => 'asylum',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'asylum_compare',
                        'orig' => 'asylum_compare',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'asylum_sort',
                        'orig' => 'asylum_sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'origin',
                        'orig' => 'origin',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'origin_compare',
                        'orig' => 'origin_compare',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'origin_sort',
                        'orig' => 'origin_sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'persons_sort',
                        'orig' => 'persons_sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'resettlement',
                        'orig' => 'resettlement',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'resettlement_sort',
                        'orig' => 'resettlement_sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'year',
                        'orig' => 'year',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'year_sort',
                        'orig' => 'year_sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/departures',
                  'segments' => [
                    [
                      'lit' => 'departures',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'asylum',
                      'asylum_compare',
                      'asylum_sort',
                      'language',
                      'origin',
                      'origin_compare',
                      'origin_sort',
                      'page',
                      'persons_sort',
                      'resettlement',
                      'resettlement_sort',
                      'year',
                      'year_sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'departures',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'helper' => [
          'fields' => [],
          'name' => 'helper',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'origin',
                        'orig' => 'origin',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'resettlement',
                        'orig' => 'resettlement',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'year',
                        'orig' => 'year',
                        'type' => '`$ARRAY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/export/csv',
                  'segments' => [
                    [
                      'lit' => 'export',
                    ],
                    [
                      'lit' => 'csv',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'origin',
                      'resettlement',
                      'type',
                      'year',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'export',
                    'csv',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'region' => [
          'fields' => [
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'region',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/regions',
                  'segments' => [
                    [
                      'lit' => 'regions',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'regions',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'submission' => [
          'fields' => [
            [
              'name' => 'asylum',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'asylum_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'destination',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'destination_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'origin',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'origin_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'persons',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'year',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'submission',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'asylum',
                        'orig' => 'asylum',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'asylum_compare',
                        'orig' => 'asylum_compare',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'asylum_sort',
                        'orig' => 'asylum_sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'origin',
                        'orig' => 'origin',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'origin_compare',
                        'orig' => 'origin_compare',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'origin_sort',
                        'orig' => 'origin_sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'persons_sort',
                        'orig' => 'persons_sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'resettlement',
                        'orig' => 'resettlement',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'resettlement_sort',
                        'orig' => 'resettlement_sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'year',
                        'orig' => 'year',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'year_sort',
                        'orig' => 'year_sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/submissions',
                  'segments' => [
                    [
                      'lit' => 'submissions',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'asylum',
                      'asylum_compare',
                      'asylum_sort',
                      'language',
                      'origin',
                      'origin_compare',
                      'origin_sort',
                      'page',
                      'persons_sort',
                      'resettlement',
                      'resettlement_sort',
                      'year',
                      'year_sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'submissions',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'url_fetch' => [
          'fields' => [
            [
              'name' => 'status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'url_fetch',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'url_hash',
                        'orig' => 'url_hash',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/fetchUrl',
                  'segments' => [
                    [
                      'lit' => 'fetchUrl',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                      'url_hash',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'fetchUrl',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'year' => [
          'fields' => [],
          'name' => 'year',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/years',
                  'segments' => [
                    [
                      'lit' => 'years',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'years',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/years/demographics',
                  'segments' => [
                    [
                      'lit' => 'years',
                    ],
                    [
                      'lit' => 'demographics',
                    ],
                  ],
                  'select' => [
                    '$action' => 'demographic',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'years',
                    'demographics',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RsqFeatures::make_feature($name);
    }
}
