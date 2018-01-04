const Router = require('koa-router')
const User = require('../controllers/user')

const router = new Router()

router.post('/user/query', User.query)
router.get('/user/:id', User.detail)
router.post('/user', User.create)
router.put('/user', User.update)
router.delete('/user/:id', User.remove)

module.exports = router
