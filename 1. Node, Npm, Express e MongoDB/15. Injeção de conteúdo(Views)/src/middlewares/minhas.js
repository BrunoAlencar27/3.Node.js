module.exports = (req,res,next)=>{
    res.locals.nome2='Bruno';
    res.locals.idade2=24;
    next();
}