<?php
declare(strict_types=1);

// Rsq SDK utility: prepare_body

class RsqPrepareBody
{
    public static function call(RsqContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
