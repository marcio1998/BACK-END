const expect = require('chai').expect;
const request = require('request');

let imc = require('./../lib/imc');

it('Main Page Status Code', function(done){
    request('http://localhost:3000', function(err , response, body){
        expect(response.statusCode).to.equal(200);
        done();
    })
});

it('About Page Status Code', function(done){
    request('http://localhost:3000/about', function(err , response, body){
        expect(response.statusCode).to.equal(200);
        done();
    })
});


describe('Complete Function IMC TEST', function(){
    it('return is an object', function(done){
            expect(typeof(imc.retorna_imc(115,1.9)) === 'object');
            done();
    });

    it('imc calculate is right', function(done){
        expect(imc.retorna_imc(115,1.9).imc === 31.85);
        done();
    });

    it('imc cdescription is right', function(done){
        expect(imc.retorna_imc(115,1.9).descricao === 'Obesidade');
        done();
    });
});
