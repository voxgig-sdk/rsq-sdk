# Rsq SDK feature factory

from rsq_sdk.feature.base_feature import RsqBaseFeature
from rsq_sdk.feature.test_feature import RsqTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RsqBaseFeature(),
        "test": lambda: RsqTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
