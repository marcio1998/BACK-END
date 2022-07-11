const programdor = {
    nome: 'Márcio Gabriel',
    nascimento: '26/03/1998',
    casado: false,
    linguagemFavorita: 'Javascript',
    trabalhoDesde: 2021
}

console.table(programdor);
console.log(programdor.nome);

//classe.
class Programdor{
    constructor(nome, nascimento, casado, linguagemFavorita = [], trabalhoDesde = null){
        this.nome = nome;
        this.nascimento = nascimento;
        this.casado = casado;
        this.linguagemFavorita = linguagemFavorita;
        this.trabalhoDesde = trabalhoDesde;
    }
}

const lavinia = new Programdor('Lavinia', '01/05/1998', false, ['C', 'Java'],2015);
console.log(lavinia);

for(let prop in lavinia){
    console.log(`propriedade: ${prop} valor: ${lavinia[prop]}`)
}