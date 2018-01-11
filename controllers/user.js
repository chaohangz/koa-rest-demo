const handleRes = require('../tools/handleRes')
const UserModal = require('../model/user')

const query = async (ctx, next) => {
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

const detail = async (ctx, next) => {
  const user = await UserModal.findById(ctx.params.id)
  ctx.body = handleRes(user)
}

const create = async (ctx, next) => {
  const data = ctx.request.body
  data.createTime = Date.now()
  await UserModal.create(data)
  ctx.body = handleRes()
}

const update = async (ctx, next) => {
  const data = ctx.request.body
  data.updateTime = Date.now()
  await UserModal.upsert(data)
  ctx.body = handleRes()
}

const remove = async (ctx, next) => {
  const user = await UserModal.findById(ctx.params.id)
  user.destroy()
  ctx.body = handleRes()
}

module.exports = {
  'POST /user/query': query,
  'GET /user/:id': detail,
  'POST /user': create,
  'PUT /user': update,
  'DELETE /user/:id': remove,
}
