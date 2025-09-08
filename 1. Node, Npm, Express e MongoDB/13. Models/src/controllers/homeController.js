const HomeModel = require('../models/HomeModel.js');

HomeModel.create({
    nome:"Bruno",
    idade:25
});

exports.paginaInicial = (req,res)=>{
    res.render('index');
}

exports.trataPost = (req,res)=>{
    res.send(`${req.body.cliente}`);
}