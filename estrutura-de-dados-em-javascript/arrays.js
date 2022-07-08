const saldoMarcio = 1000;
const saldoLavinia = 1000;

//const total = saldoMarcio + saldoLavinia;
//console.log('Total: ' + total);

const saldoContas = [100,240,1.9,500,600,185,52];
const saldoContas2 = [
    ['Banco 1',100],
    ['Banco 2',240],
    ['Banco 3',1.9],
    ['Banco 4',500],
    ['Banco 5',600],
    ['Banco 6',185],
    ['Banco 7',52] 
]; // => nessa situação usaremos objeto ou dicionário
const total = saldoContas.reduce((acumulador, valor) => acumulador + valor);
console.log('Total: ' + total);

const bandeiras = [
    ['Brasil', ['Verde','Amarelo','Azul']],
    ['Canada', ['Vermelho', 'Branco']]
]
console.log(bandeiras[0][1][0])
console.log(bandeiras[0][0])

//adicionando e removendo elementos.
let meuArray = []
let meuArray2 = new Array();
let meuArray3 = new Array(10); // podemos definir com tamanho
let meuArray4 = new Array('Marcio','Lavinia') //podemos definir valores
console.log(meuArray, meuArray2, meuArray3, meuArray4);
console.table(meuArray4);

let frutas = new Array('Abacaxi');
frutas.push('Morango'); //adicionar elemento
frutas.push('Banana');
frutas.push('Maça');
frutas.push('Fruta do Conde');
frutas.push('Mexirica');
frutas.push('Amora');
frutas.unshift('Fruta') // adiciona no começo do array
console.log('Tamanho array frtuas: ' + frutas.length);
console.table(frutas);
frutas.pop(); //remover o ultimo item
frutas.shift();//remove primeiro item
console.table(frutas);
//frutas.splice(0,1);
const frutaRemovida = frutas.splice(1,1);
console.log('Fruta removida: ' + frutaRemovida);
console.table(frutas);
frutas.splice(1,2,'Substituição'); //subsituir valor
console.table(frutas);

//Outros metodos
const redesSociais = [
    'Instagram',
    'Tik Tok',
    'FaceBook',
    'Twitter',
    'Linkedin'
];

const tiktok = redesSociais.indexOf('Tik Tok');
console.log('Posiçao Tik Tok: ' + tiktok);
console.log('Consta no array tumblr: ' + redesSociais.includes('tumbrl'));

for(let i = 0; i < redesSociais.length; i++){
    console.log(redesSociais[i])
}

//for in
console.log('For in ')
for(let i in redesSociais){
    console.log(`${i}: ${redesSociais[i]}`)
}

//for of
console.log('For of: ')
for(let valor of redesSociais){
    console.log(valor);
}

//for each
console.log('For Each: ')
redesSociais.forEach((valor, indice, redes) => console.log(`${indice} : ${valor} + copia array ${redes}`));

//outros metodos para arrays..
const aPagarEmReais = [10,20,40,100];
const cotaDolar = 5;
const aPagarEmDolar = aPagarEmReais.map((valor)=> valor * cotaDolar);
console.table(aPagarEmDolar);

//filter so retorna determinada condição
const aPagarMarcio = aPagarEmReais.filter((valor) => valor >= 30);
console.table(aPagarMarcio);

//find -> retorna quando valor for encontrado
const achar = aPagarEmReais.find((valor) => valor >= 30);
console.log(achar);

//findIndex -> retorna index valor for encontrado
const achar2 = aPagarEmReais.findIndex((valor) => valor >= 30);
console.log(achar2);

//reduce cada item pode passar um acumulador
const aPagarTotal = aPagarEmReais.reduce((acumulador,valor) => acumulador + valor , 0); //zero -> valor inicial do acumulador
console.log(aPagarTotal);

//every -> verifica se todos os elementos estão em determinada condição
const verificar = aPagarEmReais.every((valor)=> valor <= 10);
console.log(verificar);

//some -> verifica se apenas um valor é verdadeiro
const temContaAlta = aPagarEmReais.some((valor) => valor > 1000);
console.log(temContaAlta);


//concat
const contasMarcio = [10,20,30]
const contasLavinia = [40,50,60]
const contasCasal = contasMarcio.concat(contasLavinia);
console.table(contasCasal);
contasCasal.fill(0);
console.table(contasCasal);
const contasMarcio2 = [10,20,30,[1,2,3,4,5]]
const novasContasMarcio = contasMarcio2.flat();
console.table(novasContasMarcio);


//sort
const clientes = ['Marcio', 'Gabriel', 'Lavinia', 'Kellen', 'Maria Eduarda'];
console.log(clientes.sort());
const numeros = [10,5,1000,500000,1.99];
console.log(numeros.sort());
console.log(numeros.sort((a , b)=> a - b));
console.log(numeros.sort((a , b)=> b - a));
const clientes2 = [
    ['Marcio',1], 
    ['Gabriel', 5], 
    ['Lavinia', 2],
    [ 'Kellen', 3], 
    ['Maria Eduarda',4]
];
console.log(clientes2.sort((a , b)=> b[1] - a[1]));


