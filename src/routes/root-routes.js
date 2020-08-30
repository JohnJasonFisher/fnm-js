const root_routes = require('express').Router()
const user_routes = require('./user-routes')

root_routes.use('/users', user_routes);

module.exports = root_routes