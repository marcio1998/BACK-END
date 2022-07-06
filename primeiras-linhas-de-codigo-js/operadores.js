//OPERADORES ARITIMÈTICOS

/*
soma(+)
subtração(-)
divisão(/)
multiplicação(*)
*/

console.log(5+2);
console.log(5-2);
console.log(5/2);
console.log(5*2);

//incremento e decremento
let saldo = 30.00;
saldo++;
console.log(saldo);
saldo--;
console.log(saldo);
console.log(-saldo);

var idade = '18';
console.log(typeof(idade));
console.log(idade);
console.log(typeof(+idade)); //-> sinal de mais (+) ele converte o tipo para Number

//Atribuição -> dar valor para a variável
//principal é o igual (=)
var nome = 'Márcio Gabriel';

//atribuição + aritiméticos
/*
+=,
-=
*=,
/=
*/
let saldo2 = 100;
saldo2 += 10;
console.log(saldo2);
saldo2 -= 5;
console.log(saldo2);
saldo2 *= 5;
console.log(saldo2);

//OPERADORES DE COMPARAÇÃO
/*
== igual a -> compara valores
=== estritamente igual -> comapara valore e tipo de dado
!= diferente
> maior
< menor
>= maior e igual
<= menor e igual
*/

const nome_cartao = 'Márcio Gabriel';
const nome_cartao_site = 'Márico';
console.log(nome_cartao == nome_cartao_site);
console.log(nome_cartao != nome_cartao_site);

const saldo3 = 100;
const saldo3_string = '100';
console.log(saldo3 == saldo3_string);
console.log(saldo3 === saldo3_string);

const saldo4 = 100;
const saque = 200;
console.log(saldo4 > saque);
console.log(saldo4 < saque);

//OPERADORES LÓGICOS
/*
&& - e
|| - ou
! - negação
*/

const nome_esta_certo = nome_cartao_site == nome_cartao;
console.log(nome_esta_certo);
const numero_cartao = 12345;
const numero_cartao_site = 123456;
const cartao_esta_correto = numero_cartao == numero_cartao_site;
console.log(cartao_esta_correto);
console.log(nome_esta_certo && cartao_esta_correto);
console.log(nome_esta_certo || cartao_esta_correto);
console.log(!(nome_esta_certo && cartao_esta_correto));
