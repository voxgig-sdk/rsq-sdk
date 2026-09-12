import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { CountryOfAsylum, CountryOfAsylumListMatch } from '../RsqTypes';
declare class CountryOfAsylumEntity extends RsqEntityBase<CountryOfAsylum> {
    constructor(client: RsqSDK, entopts: any);
    make(this: CountryOfAsylumEntity): CountryOfAsylumEntity;
    list(this: any, reqmatch?: CountryOfAsylumListMatch, ctrl?: Control): Promise<CountryOfAsylumEntity[]>;
}
export { CountryOfAsylumEntity };
