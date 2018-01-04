const UserModal = require('../model/user')

exports.query = async (ctx, next) => {
  const user = await UserModal.findAll({
    where: {
      firstName: 'xiaoxiao'
    }
  })
  ctx.body = {
    code: 200,
    message: 'success',
    data: user,
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
  const data = ctx.request.body
  const user = await UserModal.create(data)
  console.log(user)
  ctx.body = {
    code: 200,
    message: 'success',
  }
}