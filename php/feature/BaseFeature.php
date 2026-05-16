<?php
declare(strict_types=1);

// Rsq SDK base feature

class RsqBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RsqContext $ctx, array $options): void {}
    public function PostConstruct(RsqContext $ctx): void {}
    public function PostConstructEntity(RsqContext $ctx): void {}
    public function SetData(RsqContext $ctx): void {}
    public function GetData(RsqContext $ctx): void {}
    public function GetMatch(RsqContext $ctx): void {}
    public function SetMatch(RsqContext $ctx): void {}
    public function PrePoint(RsqContext $ctx): void {}
    public function PreSpec(RsqContext $ctx): void {}
    public function PreRequest(RsqContext $ctx): void {}
    public function PreResponse(RsqContext $ctx): void {}
    public function PreResult(RsqContext $ctx): void {}
    public function PreDone(RsqContext $ctx): void {}
    public function PreUnexpected(RsqContext $ctx): void {}
}
