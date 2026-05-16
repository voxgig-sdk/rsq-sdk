# ProjectName SDK exists test

import pytest
from rsq_sdk import RsqSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RsqSDK.test(None, None)
        assert testsdk is not None
