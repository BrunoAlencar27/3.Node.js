exports.home = (req,res)=>{
    res.render('index',{
        nome:'Bruno',
        idade:24
    });
}


