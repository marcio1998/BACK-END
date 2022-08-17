import Autores from '../models/Autor.js';

class AutoresController  {
    static listarAutores = (req, res) =>{
        Autores.find((err, autor) =>{
            res.status(200).json(autor);
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new Autores(req.body);
        autor.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar o autor`});
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        Autores.findByIdAndUpdate(id,{$set: req.body}, (err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar o Livro`});
            }else{
                res.status(201).send({message: 'Livro Atualizado Com Sucesso!!'});
            }
        })
    }

    static obterAutorPorId = (req, res) =>{
        const id = req.params.id;
        Autores.findById(id, (err, autor)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Falha ao Achar autor`});
            }else{
                res.status(200).json(autor);
            }  
        })
    }

    static excluirLAutor = (req, res) =>{
        const id = req.params.id;
        Autores.findByIdAndDelete(id , (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao Achar Livro`});
            }else{
                res.status(200).send({message: 'Livro Excluido com Sucesso !!'});
            }  
        })
    }
}

export default AutoresController;