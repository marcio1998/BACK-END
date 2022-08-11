import chalk from 'chalk';
import fs from 'fs';


function extrairLink(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({
            [temp[1]]: temp[2]
        })
    }
    // const linksExtraidos = regex.exec(texto);
    // console.log(linksExtraidos);
    return arrayResultados;
}

function tratarErro(erro){
   // throw new Error(chalk.red(erro.code,'Não Há Arquivo!!'));
   throw new Error(console.error(chalk.red(erro)))
}

//async/await
async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo,encoding);
        console.log(extrairLink(texto));
    }catch(erro){
        tratarErro(erro);
    }
}

pegaArquivo('arquivos/texto1.md')


// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises.readFile(caminhoDoArquivo,encoding)
//     .then((data)=>{
//         console.log(chalk.green(data));
//     }).catch((erro)=>{
//         tratarErro(erro);
//     })
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoDoArquivo,encoding,(erro, data)=>{
//         if(erro){
//             tratarErro(erro);
//         }
//         console.log(chalk.green(data));
//     })
// }

//console.log(chalk.blue('Ola'));

//const paragrafo = 'Texto Retornado Por Uma Função';

// function texto(string){
//     return string;
// }

//console.log(texto(paragrafo));