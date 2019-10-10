const routes = require('next-routes')

module.exports = routes()
  .add('index')
  .add('flights')
  .add('search')
  .add('flight', '/flight/:origin/:destination')
  .add('origin', '/search/:origin/:destination')
