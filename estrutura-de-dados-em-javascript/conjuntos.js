//set não permite duplicatas.
const meuConjunto = new Set();

const times = ['São Paulo', 'Palmeiras', 'Santos', 'São Paulo'];
const meuCampeonato = new Set(times);
console.table(meuCampeonato);

meuConjunto.add('Marcio');
meuConjunto.add('Lavinia');
meuConjunto.add('Marcio');
meuConjunto.add(['Marcio', 'Lavinia']);
const casal = ['Marcio', 'Lavinia'];
meuConjunto.add(casal);
console.table(meuConjunto);