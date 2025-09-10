const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const userController = require('./src/controllers/userController.js');

//Rota da Home
route.get('/newuse',userController.home);

route.post('/newuse',userController.create);

route.get('/list',userController.list);

module.exports = route;