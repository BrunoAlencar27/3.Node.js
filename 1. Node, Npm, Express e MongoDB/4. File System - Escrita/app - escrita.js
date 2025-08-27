const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escreve = require('./escreve.js');

const pessoas = [
    {nome:'Bruno'},
    {nome:'Heloise'},
    {nome:'Carlos'},
    {nome:'Isayde'},
    {nome:'Kilmer'},
];

const json = JSON.stringify(pessoas,'',2);


escreve(caminhoArquivo, json);