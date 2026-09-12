import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { CountryOfOrigin, CountryOfOriginListMatch } from '../RsqTypes';
declare class CountryOfOriginEntity extends RsqEntityBase<CountryOfOrigin> {
    constructor(client: RsqSDK, entopts: any);
    make(this: CountryOfOriginEntity): CountryOfOriginEntity;
    list(this: any, reqmatch?: CountryOfOriginListMatch, ctrl?: Control): Promise<CountryOfOriginEntity[]>;
}
export { CountryOfOriginEntity };
