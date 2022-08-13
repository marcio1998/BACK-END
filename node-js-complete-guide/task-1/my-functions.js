const fs= require('fs');
const chalk = require('chalk');
const { resolve } = require('path');


const PATH = './data/contacts.txt';

function errorHandler(err){
    throw new Error(console.error(chalk.red(err)));
}

function separateRequest(content){
   const contact = {};
   let [fname , lname, telephone] = content;
   contact.firstName = fname.split('=')[1];
   contact.lastName = lname.split('=')[1];
   contact.telehpone = telephone.split('=')[1];
   appendFiles(contact);
}

function showContacts(){
    const data = fs.readFileSync(PATH);
    return data;
}

function appendFiles(content){
    fs.appendFile(PATH, JSON.stringify(content),(err)=>{
        if(err){
            errorHandler(err);
        }else{
           //console.log(chalk.blue(JSON.stringify(content)))
           console.log(chalk.blueBright('File Appendend!!!'));
        }
    })
}



module.exports = {
    separateRequest: separateRequest,
    showContacts: showContacts,
}

