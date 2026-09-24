"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DemographicEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RSQ_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RSQ_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RsqSDK.test();
        const ent = testsdk.Demographic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RSQ_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'demographic.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "code": { "a": true, "h": "Code", "n": "code", "r": false, "t": "`$STRING`", "key$": "code", "index$": 0 }, "destination": { "a": true, "h": "Destination", "n": "destination", "r": false, "t": "`$STRING`", "key$": "destination", "index$": 1 }, "destination_name": { "a": true, "h": "Destination Name", "n": "destination_name", "r": false, "t": "`$STRING`", "key$": "destination_name", "index$": 2 }, "femalesAdult": { "a": true, "h": "Females Adult", "n": "femalesAdult", "r": false, "t": "`$INTEGER`", "key$": "femalesAdult", "index$": 3 }, "femalesSenior": { "a": true, "h": "Females Senior", "n": "femalesSenior", "r": false, "t": "`$INTEGER`", "key$": "femalesSenior", "index$": 4 }, "femalesTotal": { "a": true, "h": "Females Total", "n": "femalesTotal", "r": false, "t": "`$INTEGER`", "key$": "femalesTotal", "index$": 5 }, "femalesUnderage": { "a": true, "h": "Females Underage", "n": "femalesUnderage", "r": false, "t": "`$INTEGER`", "key$": "femalesUnderage", "index$": 6 }, "femalesUnknown": { "a": true, "h": "Females Unknown", "n": "femalesUnknown", "r": false, "t": "`$INTEGER`", "key$": "femalesUnknown", "index$": 7 }, "malesAdult": { "a": true, "h": "Males Adult", "n": "malesAdult", "r": false, "t": "`$INTEGER`", "key$": "malesAdult", "index$": 8 }, "malesSenior": { "a": true, "h": "Males Senior", "n": "malesSenior", "r": false, "t": "`$INTEGER`", "key$": "malesSenior", "index$": 9 }, "malesTotal": { "a": true, "h": "Males Total", "n": "malesTotal", "r": false, "t": "`$INTEGER`", "key$": "malesTotal", "index$": 10 }, "malesUnderage": { "a": true, "h": "Males Underage", "n": "malesUnderage", "r": false, "t": "`$INTEGER`", "key$": "malesUnderage", "index$": 11 }, "malesUnknown": { "a": true, "h": "Males Unknown", "n": "malesUnknown", "r": false, "t": "`$INTEGER`", "key$": "malesUnknown", "index$": 12 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 13 }, "origin": { "a": true, "h": "Origin", "n": "origin", "r": false, "t": "`$STRING`", "key$": "origin", "index$": 14 }, "origin_name": { "a": true, "h": "Origin Name", "n": "origin_name", "r": false, "t": "`$STRING`", "key$": "origin_name", "index$": 15 }, "other": { "a": true, "h": "Other", "n": "other", "r": false, "t": "`$INTEGER`", "key$": "other", "index$": 16 }, "region": { "a": true, "h": "Region", "n": "region", "r": false, "t": "`$STRING`", "key$": "region", "index$": 17 }, "total": { "a": true, "h": "Total", "n": "total", "r": false, "t": "`$INTEGER`", "key$": "total", "index$": 18 }, "year": { "a": true, "h": "Year", "n": "year", "r": false, "t": "`$INTEGER`", "key$": "year", "index$": 19 } }, "name": "demographic", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /demographics", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "en", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "origin", "or": "origin", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "origin_compare", "or": "origin_compare", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "query", "n": "resettlement", "or": "resettlement", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "year", "or": "year", "r": false, "t": "`$ARRAY`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/demographics", "q": { "exist": ["language", "origin", "origin_compare", "resettlement", "year"] }, "r": {}, "s": [{ "lit": "demographics" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /origins/demographics", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/origins/demographics", "q": {}, "r": {}, "s": [{ "lit": "origins" }, { "lit": "demographics" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "demographic", "name__orig": "demographic", "Name": "Demographic", "name_": "demographic", "name-": "demographic", "NAME": "DEMOGRAPHIC", "index$": 3 }, { "active": true, "entity": "demographic", "key$": "BasicDemographicFlow", "kind": "basic", "name": "BasicDemographicFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "demographic_ref01" } }], "index$": 0 }] }, 'Demographic', { "GET /demographics": { "protocol": "http", "operationId": "getDemographics", "responses": { "200": { "description": "Valid request", "content": { "application/json": { "schema": { "type": "object", "properties": { "results": { "items": { "properties": { "destination": { "example": "NOR", "type": "string", "key$": "destination" }, "destination_name": { "example": "Norway", "type": "string", "key$": "destination_name" }, "femalesAdult": { "example": 300, "type": "integer", "key$": "femalesAdult" }, "femalesSenior": { "example": 45, "type": "integer", "key$": "femalesSenior" }, "femalesTotal": { "example": 375, "type": "integer", "key$": "femalesTotal" }, "femalesUnderage": { "example": 25, "type": "integer", "key$": "femalesUnderage" }, "femalesUnknown": { "example": 5, "type": "integer", "key$": "femalesUnknown" }, "malesAdult": { "example": 300, "type": "integer", "key$": "malesAdult" }, "malesSenior": { "example": 45, "type": "integer", "key$": "malesSenior" }, "malesTotal": { "example": 375, "type": "integer", "key$": "malesTotal" }, "malesUnderage": { "example": 25, "type": "integer", "key$": "malesUnderage" }, "malesUnknown": { "example": 5, "type": "integer", "key$": "malesUnknown" }, "origin": { "example": "SYR", "type": "string", "key$": "origin" }, "origin_name": { "example": "Syrian Arab Rep.", "type": "string", "key$": "origin_name" }, "other": { "example": 5, "type": "integer", "key$": "other" }, "total": { "example": 755, "type": "integer", "key$": "total" }, "year": { "example": 2013, "type": "integer", "key$": "year" } }, "type": "object", "x-ref": "#/components/schemas/Demographics", "index$": 0 }, "key$": "results", "type": "array" }, "url": { "example": "#c3X3", "key$": "url", "type": "string" } }, "x-ref": "#/components/schemas/DemographicsResponse" } } } }, "default": { "description": "Unexpected error occurred" } }, "parameters": [{ "name": "language", "in": "query", "description": "Return results will be translated in requested language. Defaults to english", "required": false, "schema": { "type": "string", "enum": ["en", "fr"], "default": "en" }, "index$": 0 }, { "name": "year", "in": "query", "description": "One or more available years", "required": false, "schema": { "type": "array", "items": { "type": "integer" } }, "style": "form", "explode": false, "index$": 1 }, { "name": "origin", "in": "query", "description": "One or more country of origin codes", "required": false, "schema": { "type": "array", "items": { "type": "string" } }, "style": "form", "explode": false, "index$": 2 }, { "name": "originCompare", "in": "query", "description": "Used in combination with atleast one origin. Groups all other origins as 'All others' entry in results", "required": false, "schema": { "type": "boolean" }, "index$": 3 }, { "name": "resettlement", "in": "query", "description": "One or more country of resettlement codes", "required": false, "schema": { "type": "array", "items": { "type": "string" } }, "style": "form", "explode": false, "index$": 4 }], "securitySource": "unspecified" }, "GET /origins/demographics": { "protocol": "http", "operationId": "getOriginsDemographics", "responses": { "200": { "description": "Valid request", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "code": { "type": "string", "example": "HRV", "key$": "code" }, "name": { "type": "string", "example": "Croatia", "key$": "name" }, "region": { "type": "string", "example": "Europe", "key$": "region" } }, "x-ref": "#/components/schemas/CountryOfOrigin", "index$": 0 } } } } }, "default": { "description": "Unexpected error occurred" } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let demographic_ref01_data = Object.values(setup.data.existing.demographic)[0];
        // LIST
        const demographic_ref01_ent = client.Demographic();
        const demographic_ref01_match = {};
        const demographic_ref01_list = (await demographic_ref01_ent.list(demographic_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/demographic/DemographicTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RsqSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['demographic01', 'demographic02', 'demographic03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RSQ_TEST_DEMOGRAPHIC_ENTID': idmap,
        'RSQ_TEST_LIVE': 'FALSE',
        'RSQ_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['RSQ_TEST_DEMOGRAPHIC_ENTID'];
    const live = 'TRUE' === env.RSQ_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RSQ_TEST_DEMOGRAPHIC_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RsqSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.RSQ_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=DemographicEntity.test.js.map