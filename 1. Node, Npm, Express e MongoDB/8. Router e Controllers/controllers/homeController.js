exports.paginaInicial = (req,res)=>{
    res.send(`
        <form action = "/" method = "POST">
         Nome do Client: <input type="text" name = "nome">
        <button>Enviar</button>
        </form>
    `);
}

exports.trataPost = (req,res)=>{
    res.send(`Seu nome é ${req.body.nome}`);
}