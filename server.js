const Koa = require('koa')

const port = () => process.env.PORT || 3000
const app = new Koa()
    .use(require('koa-json')())
    .use(require('koa-logger')())
    .use(require('./src/routes'))
    .listen(port())
    .on('listening',
        () => console.log(`App Running on port ${port()}`))

module.exports = app
