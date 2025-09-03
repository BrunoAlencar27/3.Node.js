const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');

route.use((req,res,next)=>{
    console.log()
    console.log('Pansando aqui no teu middleware');
    console.log()
    next();
})


//Rota da Home
route.get('/',homeController.paginaInicial);

route.post('/',homeController.trataPost);

module.exports = route;