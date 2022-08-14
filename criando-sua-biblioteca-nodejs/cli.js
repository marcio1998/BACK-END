const chalk = require('chalk');
const validaUrls = require('./http-validacoes');
const pegaArquivo = require ('./index.js')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if(caminho[3] == 'validar'){
        console.log(chalk.yellow('links Validados'),await validaUrls(resultado));
    }else{
        console.log(chalk.yellow('Lista de Liks'), resultado);
    }


}

processaTexto(caminho);