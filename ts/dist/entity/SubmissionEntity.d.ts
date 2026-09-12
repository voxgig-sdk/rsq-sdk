import { RsqEntityBase } from '../RsqEntityBase';
import type { RsqSDK } from '../RsqSDK';
import type { Control } from '../types';
import type { Submission, SubmissionListMatch } from '../RsqTypes';
declare class SubmissionEntity extends RsqEntityBase<Submission> {
    constructor(client: RsqSDK, entopts: any);
    make(this: SubmissionEntity): SubmissionEntity;
    list(this: any, reqmatch?: SubmissionListMatch, ctrl?: Control): Promise<SubmissionEntity[]>;
}
export { SubmissionEntity };
