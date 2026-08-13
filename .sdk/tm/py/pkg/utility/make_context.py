# Rsq SDK utility: make_context

from projectname_sdk.core.context import RsqContext


def make_context_util(ctxmap, basectx):
    return RsqContext(ctxmap, basectx)
