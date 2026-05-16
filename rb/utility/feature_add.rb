# Rsq SDK utility: feature_add
module RsqUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
