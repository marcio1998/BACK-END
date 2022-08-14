const pegaArquivo = require('../index.js');
const arrayResultados = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('PegaArquivo::', ()=>{
    it('deve ser uma funcao', ()=>{
        expect(typeof(pegaArquivo)).toBe('function');  
    })
    it('deve retornar array com resultados', async ()=>{
        const resultado = await pegaArquivo("C:/Users/Gabriel/Desktop/BACK-END/criando-sua-biblioteca-nodejs/test/arquivos/texto1.md");
        expect(resultado).toEqual(arrayResultados);
    })
    it('deve retornar mensagem "Não Há Links"',async()=>{
        const resultado = await pegaArquivo("C:/Users/Gabriel/Desktop/BACK-END/criando-sua-biblioteca-nodejs/test/arquivos/texto1_semlinhas.md");
        expect(resultado).toBe('Não Há Links');
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos')).rejects.toThrow("");
    })
})


// test('deve ser uma funcao', () => {
//     expect(typeof(pegaArquivo)).toBe('function');
// });