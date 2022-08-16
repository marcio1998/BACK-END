import livros from '../models/Livro.js';

class LivroController  {
    static listarLivros = (req, res) =>{
        livros.find((err, livro) =>{
            res.status(200).json(livro);
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar o Livro`});
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }
}

export default LivroController;