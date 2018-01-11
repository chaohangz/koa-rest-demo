module.exports = async (ctx, next) => {
  const reqCookie = ctx.request.headers.cookie
  const mineCookie = ctx.cookies.get('ucookie')

  // 请求带有cookie 或者请求的url为登录url才能通过
  if ((reqCookie && reqCookie.indexOf(mineCookie) !== -1) || ctx.request.url === '/user/login') {
    await next()
  } else {
    ctx.status = 401
    ctx.body = {
      code: '9999',
      success: false,
      message: '登录过期，请重新登录',
    }
  }
}
