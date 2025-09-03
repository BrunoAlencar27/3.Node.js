const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');

//Rota da Home
route.get('/',homeController.paginaInicial);

route.post('/',homeController.trataPost);

module.exports = route;