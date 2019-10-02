const express = require('express');
const routes = express.Router();
const UserController = require('../Controllers/UserController');

routes.post('/User', UserController.store);


module.exports = routes;