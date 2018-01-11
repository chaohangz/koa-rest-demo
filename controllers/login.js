const handleRes = require('../tools/handleRes')
const UserModel = require('../model/user')

const login = async (ctx) => {
  const data = ctx.request.body

  const user = await UserModel.findOne({
    where: { username: data.username },
  })

  if (!user) {
    ctx.status = 401
    ctx.body = handleRes(null, '9999', '找不到该用户')
    return false
  }

  const psw = user.get('password')
  if (psw !== data.password) {
    ctx.status = 401
    ctx.body = handleRes(null, '9999', '用户名或密码输入错误')
    return false
  }

  const cookie = `${user.get('id')}%${user.get('username')}%${new Date().valueOf()}`

  ctx.cookies.set('ucookie', cookie, {
    signed: true,
    maxAge: 60 * 60 * 1000, // 过期时间
  })
  ctx.body = handleRes({
    id: user.get('id'),
    username: user.get('username'),
  })
}

const checkLogin = async (ctx) => {
  const cookie = ctx.cookies.get('ucookie')
  // 从cookie中读取username
  const username = cookie.split('%')[1]

  const user = await UserModel.findOne({
    where: { username },
  })
  ctx.body = handleRes({
    id: user.get('id'),
    username: user.get('username'),
  })
}

const logout = async (ctx) => {
  ctx.cookies.set('ucookie', null)
  ctx.body = handleRes()
}

module.exports = {
  'POST /user/login': login,
  'GET /user/checklogin': checkLogin,
  'GET /user/logout': logout,
}
