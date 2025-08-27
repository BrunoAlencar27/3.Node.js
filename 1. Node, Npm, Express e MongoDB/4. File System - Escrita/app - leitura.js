const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const ler = require('./ler');

async function lerArquivo(caminho){
    const dados = await ler(caminho);
    trataDados(dados);
}

function trataDados(dados){
    dadosTratados = JSON.parse(dados);
    for(let chave  of  dadosTratados){
        console.log(chave.nome);
    }
}

const dadosArquivo = lerArquivo(caminhoArquivo)
.then(dados =>console.log(dados))



