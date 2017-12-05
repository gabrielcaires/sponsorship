const { index } = require('./controllers/health-check')
const router = require('koa-router')();
router.get('/health-check', index)

module.exports = router.routes()
