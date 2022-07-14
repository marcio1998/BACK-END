const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');

console.table(meuDicionario);

const palavra = meuDicionario.get('blz');
console.log(palavra);

const meuDicionario2 = new Map();
const indiceContatos = [
    ['marcio', '99996655'],
    ['lavinia', '1234568779'],
    ['madu', '12345689']
];

meuDicionario2.set(indiceContatos[0],{nascimento: '23/06/1998'});
meuDicionario2.set(indiceContatos[1],{nascimento: '01/05/1998'});
console.table(meuDicionario2);

const marcio = meuDicionario2.get(indiceContatos[0]);
console.log(marcio);