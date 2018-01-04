module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500
    ctx.body = {
      code: 'err',
      success: false,
      message: err.message,
    }
    ctx.app.emit('error', err, ctx)
  }
}
