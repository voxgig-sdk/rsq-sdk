<?php
declare(strict_types=1);

// Rsq SDK exists test

require_once __DIR__ . '/../rsq_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RsqSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
