const handleRes = require('../tools/handleRes')
const UserModal = require('../model/user')

exports.query = async (ctx, next) => {
  const req = ctx.request
  const query = req.query
  const size = parseInt(query.size) || 10
  const page = parseInt(query.page) || 1
  const search = req.body

  const users = await UserModal.findAndCountAll({
    where: search,
    limit: size,
    offset: size * (page - 1),
  })
  users.current = query.page
  users.pageSize = query.size
  ctx.body = handleRes(users)
}

exports.detail = async (ctx, next) => {
  const user = await UserModal.findById(ctx.params.id)
  ctx.body = handleRes(user)
}

exports.create = async (ctx, next) => {
  const data = ctx.request.body
  data.create_time = new Date()
  await UserModal.create(data)
  ctx.body = handleRes()
}

exports.update = async (ctx, next) => {
  const data = ctx.request.body
  const user = await UserModal.findById(data.id)
  data.update_time = new Date()
  user.update(data)
  ctx.body = handleRes()
}

exports.remove = async (ctx, next) => {
  const user = await UserModal.findById(ctx.params.id)
  user.destroy()
  ctx.body = handleRes()
}
