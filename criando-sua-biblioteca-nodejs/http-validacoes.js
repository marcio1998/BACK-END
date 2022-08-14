const chalk = require('chalk');
const fetch = require('node-fetch');

function manejaErro(erro){
    throw new Error(erro.message);
}

async function verificaStatus(arrayUrls){
    try{
    //promisss async await
    //console.log(chalk.yellow(arrayUrls));
    const arrayDeStatus = await Promise.all(arrayUrls.map(async url=>{
        //console.log(chalk.green(url));
        const res = await fetch(url);
        //console.log(chalk.bgBlue(res.status));
        return res.status;
    }))
    return arrayDeStatus;
    }catch(erro){
        manejaErro(erro)
    }

}


function geraArraydeUrls(arrayDeLinks){
    //Object.values()
    //console.log(chalk.red(Object.values(arrayDeLinks)));
    return arrayDeLinks.map((objetoLink)=>{
       return Object.values(objetoLink).join();
    })
}

async function validaUrls(arrayLinks){
   // console.log(chalk.blueBright(Object.values(arrayLinks[1])));
    const links =  geraArraydeUrls(arrayLinks);
    //console.log(chalk.red(links));
    const statusLinks = await verificaStatus(links);
    const resultado = arrayLinks.map((objeto,index)=>{
        return ({
            ...objeto, 
            status: statusLinks[index]})
    });
    return resultado;
}

module.exports = validaUrls;