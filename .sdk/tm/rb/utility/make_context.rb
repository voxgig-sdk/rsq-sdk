# Rsq SDK utility: make_context
require_relative '../core/context'
module RsqUtilities
  MakeContext = ->(ctxmap, basectx) {
    RsqContext.new(ctxmap, basectx)
  }
end
