import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { Region, RegionListMatch } from '../RsqTypes';
declare class RegionEntity extends RsqEntityBase<Region> {
    constructor(client: RsqSDK, entopts: any);
    make(this: RegionEntity): RegionEntity;
    list(this: any, reqmatch?: RegionListMatch, ctrl?: Control): Promise<RegionEntity[]>;
}
export { RegionEntity };
