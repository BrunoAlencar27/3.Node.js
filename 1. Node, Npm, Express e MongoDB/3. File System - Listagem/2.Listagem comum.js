/*
Descrição: uso uso da função readdir com funções
Autor: Bruno Alencar Alves
Data: 25/08/25
*/

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(_dirname);
    const files = await fs.readdir(rootDir);
    walk(files);
}

function walk (files){
    for(let file of files){
        console.log(file);
    }
}


//Chamda da função readdir
readdir('/home/brunoalencar/Documentos/5 .Github [Repositórios]/2.-Java-Script');