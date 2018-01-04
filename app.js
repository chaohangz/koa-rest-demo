const Koa = require('koa')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const serve = require('koa-static')
const Sequelize = require('sequelize')
const path = require('path')
const config = require('./config')
const handleErr = require('./tools/handleErr')

const UserRoutes = require('./routes/user')

const app = new Koa()

// 打印日志
app.use(logger())

// 错误处理
app.use(handleErr)

// 处理body
app.use(koaBody())

// router
app.use(UserRoutes.routes())

app.use(serve(path.join(__dirname, 'public')))

app.listen(config.System.port)

console.log('listening on port ' + config.System.port)
