const UserModel = require('../models/UserModel.js');


exports.home = (req,res) => {
    res.render('index');
}

exports.create = async(req,res) => {
    try{
        const {nome,idade,sexo,altura,peso} = req.body;
        const User = new UserModel({nome,idade,sexo,altura,peso});
        await User.save();
        res.send('Usário criado com sucesso');
    }catch(err){
        res.status(500).send({erro:err.menssage});
    }
}

exports.list = async (req,res) =>{
    try{
        const Users = await UserModel.find();
        res.send(Users);
    }catch(err){
        res.status(500).send({erro:err.menssage});
    }

}