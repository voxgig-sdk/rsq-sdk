<?php
declare(strict_types=1);

// Rsq SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RsqFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RsqBaseFeature();
            case "test":
                return new RsqTestFeature();
            default:
                return new RsqBaseFeature();
        }
    }
}
