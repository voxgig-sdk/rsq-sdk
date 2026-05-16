<?php
declare(strict_types=1);

// Rsq SDK utility: feature_add

class RsqFeatureAdd
{
    public static function call(RsqContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
