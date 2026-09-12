import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { Departure, DepartureListMatch } from '../RsqTypes';
declare class DepartureEntity extends RsqEntityBase<Departure> {
    constructor(client: RsqSDK, entopts: any);
    make(this: DepartureEntity): DepartureEntity;
    list(this: any, reqmatch?: DepartureListMatch, ctrl?: Control): Promise<DepartureEntity[]>;
}
export { DepartureEntity };
