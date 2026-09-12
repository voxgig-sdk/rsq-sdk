import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { Demographic, DemographicListMatch } from '../RsqTypes';
declare class DemographicEntity extends RsqEntityBase<Demographic> {
    constructor(client: RsqSDK, entopts: any);
    make(this: DemographicEntity): DemographicEntity;
    list(this: any, reqmatch?: DemographicListMatch, ctrl?: Control): Promise<DemographicEntity[]>;
}
export { DemographicEntity };
