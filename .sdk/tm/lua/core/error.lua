-- Rsq SDK error

local RsqError = {}
RsqError.__index = RsqError


function RsqError.new(code, msg, ctx)
  local self = setmetatable({}, RsqError)
  self.is_sdk_error = true
  self.sdk = "Rsq"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RsqError:error()
  return self.msg
end


function RsqError:__tostring()
  return self.msg
end


return RsqError
