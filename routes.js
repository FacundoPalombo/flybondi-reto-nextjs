const routes = require('next-routes')

routes
  .add('index')
  .add('flights')
  .add('search')
  .add('flight', '/flight/:origin/:destination')
