<?php
declare(strict_types=1);

// Rsq SDK utility: result_body

class RsqResultBody
{
    public static function call(RsqContext $ctx): ?RsqResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
