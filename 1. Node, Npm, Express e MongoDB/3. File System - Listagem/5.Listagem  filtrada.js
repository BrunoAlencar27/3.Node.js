/*
Descrição: uso uso da função readdir de forma recursiva
Autor: Bruno Alencar Alves
Data: 25/08/25
*/

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir){
    //Se houver um rootDir, usa-o, seunão usa o comainho do path.resolve(__dirname)
    rootDir = rootDir || path.resolve(__dirname);
    //Armazenando o array com nomes dos arquivos e pastas
    const files = await fs.readdir(rootDir);
    //Mandnando o array para a função wake
    wake(files,rootDir);
}

//Função wake printa na tea os arquios e pastas mandandos pela função readdir
async function wake(files,rootDir){
    for(let file of files){
        const fileFulPath = path.resolve(rootDir,file);
        const stats = await fs.stat(fileFulPath);

        if(stats.isDirectory()){
            readdir(fileFulPath);
            continue;
        }
        if(!/.js/g.test(fileFulPath)) continue;
        console.log(file);
    }
}


//Chamda da função readdir
readdir('/home/brunoalencar/Documentos/5 .Github [Repositórios]/2.-Java-Script');
