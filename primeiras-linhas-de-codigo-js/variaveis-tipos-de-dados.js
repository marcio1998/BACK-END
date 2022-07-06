//variaveis e tipos de dados

/*

*TIPOS PRIMITIVOS
INTEIROS
2000, -8

REAIS
25.5, 2.58, -500.56

CARACTERES
São Textos. Ex: 'Márcio Gabriel' -> Meu Nome

LÒGICOS
true - VERDADEIRO, false - FALSO
1- VERDADEIRO, 0 - FALSO

*/

var nome = 'Márcio Gabriel';
console.log(nome);
var idade = 24;
console.log(idade);
var peso = 110.5;
console.log(peso);
var verdadeiro = true;
console.log(verdadeiro);
var soma = 2 + 2;
console.log(soma)


//TIPOS DE DADOS JAVASCRIPT

//Number
var saldo = 145.25;

//Infinity
var resultado = 42/0;
console.log(resultado);

//NaN - Not a Number
const resultado_2 = 42 / 'leticia';
console.log(resultado_2);

//String - Cadeia de Caracteres
var nome_2 = 'Lavinia Quilez';
console.log(nome_2);

//Boolean - Bool - Lógico
var verdadeiro_2 = true;
var falso = false;
console.log(falso);

//Null - Vazio
var vazia = null;
console.log(vazia);

//undefined - não definido
var indefinida;
console.log(indefinida)

//OBJETO - Mapear coisas do mundo real.
//Arrays - Listas

// var, let e  const
var nomeSite = 'Vendinha da Leticia'
console.log(nomeSite)
nomeSite = 'Venda da Leticia'
console.log(nomeSite)

let saldo_2 = 245.50
console.log(saldo)
//let saldo_2 = 300

/* O var permite eu redeclarar a variavel, o let não permite eu redeclarar a variavel, mas, ambas podem 
sofrer alteração no valor, porém const não permite alteração no valor*/

//Tipo de DADOS
console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(saldo))
console.log(typeof(verdadeiro))
console.log(typeof(indefinida))
console.log(typeof(vazia))
