const express = require('express');
const app = express();


//Rota rpondendo a requisição do tipo GET
app.get('/',(req,res)=>{
    res.send(`
    <form action = "/" method = "POST">
    Nome do Client: <input type="text" name = "nome">
    <button>Enviar</button>
    </form>
    `);
})

//Rota respondendo a requisição do tipo POST
app.post('/',(req,res)=>{
    res.send('Nome enviado...');
})

app.listen(3000, ()=>{
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor rodando...')
})