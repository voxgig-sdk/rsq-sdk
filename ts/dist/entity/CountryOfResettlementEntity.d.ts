import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { CountryOfResettlement, CountryOfResettlementListMatch } from '../RsqTypes';
declare class CountryOfResettlementEntity extends RsqEntityBase<CountryOfResettlement> {
    constructor(client: RsqSDK, entopts: any);
    make(this: CountryOfResettlementEntity): CountryOfResettlementEntity;
    list(this: any, reqmatch?: CountryOfResettlementListMatch, ctrl?: Control): Promise<CountryOfResettlementEntity[]>;
}
export { CountryOfResettlementEntity };
