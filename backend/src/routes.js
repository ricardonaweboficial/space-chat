const { Router } = require('express');
const routes = Router();

const UsersControllers = require('./controllers/UsersControllers');

routes.get('/users', UsersControllers.index)
routes.post('/users_create', UsersControllers.store);

module.exports = routes;