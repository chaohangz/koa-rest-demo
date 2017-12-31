exports.query = (ctx, next) => {
  ctx.body = {
    code: 200,
    message: 'success',
    data: {
      name: 'one',
      password: '12345',
    },
  }
}

exports.detail = (ctx, next) => {
  ctx.body = {
    code: 200,
    message: 'success',
    data: ctx.params,
  }
}

exports.create = async (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      ctx: ctx.request.body,
    }
  }
}