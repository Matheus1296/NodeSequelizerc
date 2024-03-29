const express = require('express');
const UserController = require('./app/controllers/UserController');

const routes = express.Router();

routes.get('/users',UserController.index);
routes.post('/users',UserController.store);
routes.get('/users/:id',UserController.show);
routes.put('/users/:id',UserController.update);
routes.delete('/users/:id',UserController.delete);

module.exports = routes;