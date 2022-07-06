//if
const num = 1;
if(num > 2){
  console.log('Numero maior que 2')
}else{
  console.log('Numenro menor que 2')
}

const mes = 1;

if(mes == 1){
  console.log('Janeiro');
}else if(mes == 2){
  console.log('Fevereiro');
}else{
  console.log('Março até Dezembro');
}

//SWITCH
switch(mes){
  case 1:
    console.log('Janeiro');
    break;
  case 2:
    console.log('Fevereiro');
    break;
  default:
    console.log('Março Até Dezembro');
    break;
}


