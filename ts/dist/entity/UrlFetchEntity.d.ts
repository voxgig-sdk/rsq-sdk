import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { UrlFetch, UrlFetchListMatch } from '../RsqTypes';
declare class UrlFetchEntity extends RsqEntityBase<UrlFetch> {
    constructor(client: RsqSDK, entopts: any);
    make(this: UrlFetchEntity): UrlFetchEntity;
    list(this: any, reqmatch?: UrlFetchListMatch, ctrl?: Control): Promise<UrlFetchEntity[]>;
}
export { UrlFetchEntity };
