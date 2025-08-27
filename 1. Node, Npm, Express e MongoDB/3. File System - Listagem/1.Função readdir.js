/*
Descrição: uso mais básico possível da função readdir do fs
Autor: Bruno Alencar Alves
Data: 25/08/25
*/

const fs = require('fs').promises;
const path = require('path');

fs.readdir(__dirname)
    .then(files => console.log(files))
    .catch(erro => console.log(erro));