const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Primeiro Servidor');
});

app.listen(3000,()=>{
    console.log('Acessa: http://localhost:3000');
    console.log('Servidor no ar...');
})