import livros from '../models/Livro.js';

class LivroController  {
    static listarLivros = (req, res) =>{
        livros.find()
            .populate('autor')
            .exec((err, livro) =>{
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

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id,{$set: req.body}, (err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar o Livro`});
            }else{
                res.status(201).send({message: 'Livro Atualizado Com Sucesso!!'});
            }
        })
    }

    static obterLivroPorId = (req, res) =>{
        const id = req.params.id;
        livros.findById(id)
            .populate("autor","nome")
            .exec((err, livro)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Falha ao Achar Livro`});
            }else{
                res.status(200).json(livro);
            }  
        })
    }

    static excluirLivro = (req, res) =>{
        const id = req.params.id;
        livros.findByIdAndDelete(id , (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao Achar Livro`});
            }else{
                res.status(200).send({message: 'Livro Excluido com Sucesso !!'});
            }  
        })
    }

    static listarLivroPorEditora = (req, res) =>{
        const editora = req.query.editora;
        livros.find({'editor': editora}, {}, (err, livros) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar o Livro`});
            }else{
                res.status(200).json(livros)
            }
        })
    }
}

export default LivroController;