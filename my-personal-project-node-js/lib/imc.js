//calculate IMC

let resultado = {};

function calcula_imc(peso,altura){
    imc = peso / (Math.pow(altura,2));
    resultado['imc'] = parseFloat(imc).toFixed(2);
    return imc;
}

exports.retorna_imc = function(peso, altura){
    imc = calcula_imc(peso, altura);
    if(imc >= 18.45 && imc <= 24.9){
        resultado['descricao'] = 'Normal';
    }else if(imc >= 25.00 && imc <= 29.9){
        resultado['descricao'] = 'Sobre Peso';
    }else if(imc >= 30.00 && imc <= 39.9){
        resultado['descricao'] = 'Obesidade'
    }else if(imc > 40.0){
        resultado['descricao'] = 'Obesidade Grave' 
    }else{
        resultado['descricao'] = 'sem Descirção' 
    }
    return resultado;
}

