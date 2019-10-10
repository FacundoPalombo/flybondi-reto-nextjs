// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const {createServer} = require('http') 

const PORT = process.env.PORT || 3000
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(PORT)
})
