import { CategoryEntity } from './entity/CategoryEntity';
import { CountryOfAsylumEntity } from './entity/CountryOfAsylumEntity';
import { CountryOfOriginEntity } from './entity/CountryOfOriginEntity';
import { CountryOfResettlementEntity } from './entity/CountryOfResettlementEntity';
import { DemographicEntity } from './entity/DemographicEntity';
import { DepartureEntity } from './entity/DepartureEntity';
import { HelperEntity } from './entity/HelperEntity';
import { RegionEntity } from './entity/RegionEntity';
import { SubmissionEntity } from './entity/SubmissionEntity';
import { UrlFetchEntity } from './entity/UrlFetchEntity';
import { YearEntity } from './entity/YearEntity';
export type * from './RsqTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RsqEntityBase } from './RsqEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class RsqSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Category(entopts?: Record<string, any>): CategoryEntity;
    CountryOfAsylum(entopts?: Record<string, any>): CountryOfAsylumEntity;
    CountryOfOrigin(entopts?: Record<string, any>): CountryOfOriginEntity;
    CountryOfResettlement(entopts?: Record<string, any>): CountryOfResettlementEntity;
    Demographic(entopts?: Record<string, any>): DemographicEntity;
    Departure(entopts?: Record<string, any>): DepartureEntity;
    Helper(entopts?: Record<string, any>): HelperEntity;
    Region(entopts?: Record<string, any>): RegionEntity;
    Submission(entopts?: Record<string, any>): SubmissionEntity;
    UrlFetch(entopts?: Record<string, any>): UrlFetchEntity;
    Year(entopts?: Record<string, any>): YearEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RsqSDK;
    tester(testopts?: any, sdkopts?: any): RsqSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RsqSDK;
export { stdutil, config, BaseFeature, RsqEntityBase, RsqSDK, SDK, };
