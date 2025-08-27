/*
Descrição: uso pŕatico da função stat
Autor: Bruno Alencar Alves
Data: 25/08/25
*/

const fs = require('fs').promises;
const path = require('path');


//Retornando um objeto com informações deste arquivo
fs.stat(__dirname)
    .then(objeto => console.log(objeto));


//Usando o método isDirrectory para saber se é pasta ou arquivo
fs.stat(__dirname)
    .then(objeto => {
        if(objeto.isDirectory ==true){
            console.log('É uma pasta');
        }else{
            console.log('É um arquivo');
        }
    })