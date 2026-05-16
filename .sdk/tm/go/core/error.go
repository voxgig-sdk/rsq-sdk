package core

type RsqError struct {
	IsRsqError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRsqError(code string, msg string, ctx *Context) *RsqError {
	return &RsqError{
		IsRsqError: true,
		Sdk:              "Rsq",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RsqError) Error() string {
	return e.Msg
}
