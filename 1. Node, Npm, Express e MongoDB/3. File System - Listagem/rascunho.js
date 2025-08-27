/*
Descrição: uso uso da função readdir com funções
Autor: Bruno Alencar Alves
Data: 25/08/25
*/

const fs = require('fs').promises;
const path = require('path');

/*Função para receber o caminho(rootDir) do diretório, cujos arquivos e pastas
serão lidos*/
async function readdir(rootDir){
    //Se houver um rootDir, usa-o, seunão usa o comainho do path.resolve(__dirname)
    rootDir = rootDir || path.resolve(__dirname);
    //Armazenando o array com nomes dos arquivos e pastas
    const files = await fs.readdir(rootDir);
    //Mandnando o array para a função wake
    wake(files);
}

//Função wake printa na tea os arquios e pastas mandandos pela função readdir
function wake(files){
    for(let file of files){
        console.log(file);
    }
}

//Chamda da função readdir
readdir('/home/brunoalencar/Documentos/5 .Github [Repositórios]/2.-Java-Script');