<?php
declare(strict_types=1);

// Rsq SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

RsqUtility::setRegistrar(function (RsqUtility $u): void {
    $u->clean = [RsqClean::class, 'call'];
    $u->done = [RsqDone::class, 'call'];
    $u->make_error = [RsqMakeError::class, 'call'];
    $u->feature_add = [RsqFeatureAdd::class, 'call'];
    $u->feature_hook = [RsqFeatureHook::class, 'call'];
    $u->feature_init = [RsqFeatureInit::class, 'call'];
    $u->fetcher = [RsqFetcher::class, 'call'];
    $u->make_fetch_def = [RsqMakeFetchDef::class, 'call'];
    $u->make_context = [RsqMakeContext::class, 'call'];
    $u->make_options = [RsqMakeOptions::class, 'call'];
    $u->make_request = [RsqMakeRequest::class, 'call'];
    $u->make_response = [RsqMakeResponse::class, 'call'];
    $u->make_result = [RsqMakeResult::class, 'call'];
    $u->make_point = [RsqMakePoint::class, 'call'];
    $u->make_spec = [RsqMakeSpec::class, 'call'];
    $u->make_url = [RsqMakeUrl::class, 'call'];
    $u->param = [RsqParam::class, 'call'];
    $u->prepare_auth = [RsqPrepareAuth::class, 'call'];
    $u->prepare_body = [RsqPrepareBody::class, 'call'];
    $u->prepare_headers = [RsqPrepareHeaders::class, 'call'];
    $u->prepare_method = [RsqPrepareMethod::class, 'call'];
    $u->prepare_params = [RsqPrepareParams::class, 'call'];
    $u->prepare_path = [RsqPreparePath::class, 'call'];
    $u->prepare_query = [RsqPrepareQuery::class, 'call'];
    $u->result_basic = [RsqResultBasic::class, 'call'];
    $u->result_body = [RsqResultBody::class, 'call'];
    $u->result_headers = [RsqResultHeaders::class, 'call'];
    $u->transform_request = [RsqTransformRequest::class, 'call'];
    $u->transform_response = [RsqTransformResponse::class, 'call'];
});
