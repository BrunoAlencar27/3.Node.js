const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
);

//Rota configurada para enviar dados pelo a URL, em parâmetros de rota
app.get('/teste/:nome/:id',(req,res)=>{
    res.send(req.params);
});

//Rota mostrando qualquer query string enviada pela URL
app.get('/teste',(req,res)=>{
    res.send(req.query);

});

//Rota confiruada para enviar dados pelo o pelo corpo da requisição
app.get('/teste/formulario',(req,res)=>{
    res.send(`
        <form action = "/teste/formulario" method = "POST">
         Nome do Client: <input type="text" name = "nome">
        <button>Enviar</button>
        </form>
    `);
});

//Rota mostrando os dados enviados pelo o corpo da requisição
app.post('/teste/formulario',(req,res)=>{
    res.send(`Seu nome é ${req.body.nome}`);
})


app.listen(3000,()=>{
    
});