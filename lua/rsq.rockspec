package = "voxgig-sdk-rsq"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/rsq-sdk.git"
}
description = {
  summary = "Rsq SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["rsq_sdk"] = "rsq_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
