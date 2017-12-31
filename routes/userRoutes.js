const Router = require('koa-router')
const User = require('../controllers/user')

const router = new Router()

router.get('/user', User.query)
router.get('/user/:id', User.detail)
router.post('/user', User.create)

module.exports = router