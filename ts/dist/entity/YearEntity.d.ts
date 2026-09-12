import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { Year, YearListMatch } from '../RsqTypes';
declare class YearEntity extends RsqEntityBase<Year> {
    constructor(client: RsqSDK, entopts: any);
    make(this: YearEntity): YearEntity;
    list(this: any, reqmatch?: YearListMatch, ctrl?: Control): Promise<YearEntity[]>;
}
export { YearEntity };
