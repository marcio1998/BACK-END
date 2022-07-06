//FUNÇÔES

function minha_funcao(){
  console.log('Olá Função')
}

minha_funcao();

//parametros com valor default
function somar(x = 0, y = 0){
  const resultado = x + y;
  return resultado;
}

let soma = somar(5);
console.log(soma);

/*Desafioa função tres parametros = nomeCartao, numeroCartao, codigoVerificacao, imprimir para cada um dos
paramentros um boolean*/


const nome = 'Márcio';
const numero = 123456;
const codigo = 123;

function validarCartao(nomeCartao, numeroCartao, codigoVerificacao){
  validarNome = nomeCartao === nome;
  if(validarNome){
    console.log('Nome Correto');
  }else{
    console.log('Nome Incorreto !!');
  }
  
  validarNumero = numeroCartao === numero;
  if(validarNumero){
    console.log('Numero Correto');
  }else{
    console.log('Numero Incorreto !!');
  }
  
  validarCodigo = codigo === codigoVerificacao;
  if(validarCodigo){
    console.log('Código Correto');
  }else{
    console.log('Código Incorreto !!');
  }
  
  const retornar = validarNome&&validarCodigo&&validarNumero
  console.log(retornar)
}

validarCartao('Márcios', 1234, 1225)

//ARROW FUNCTIONS
const somar_2 = (x = 0, y = 0) => x + y;
console.log(somar_2(2,2))
