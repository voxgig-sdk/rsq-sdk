"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsqError = void 0;
class RsqError extends Error {
    isRsqError = true;
    sdk = 'Rsq';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.RsqError = RsqError;
//# sourceMappingURL=RsqError.js.map