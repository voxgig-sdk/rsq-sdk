import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { Helper, HelperLoadMatch } from '../RsqTypes';
declare class HelperEntity extends RsqEntityBase<Helper> {
    constructor(client: RsqSDK, entopts: any);
    make(this: HelperEntity): HelperEntity;
    load(this: any, reqmatch?: HelperLoadMatch, ctrl?: Control): Promise<HelperEntity>;
}
export { HelperEntity };
