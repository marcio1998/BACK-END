import chalk from 'chalk';
import cidade from '../model/Cidade.js';

class CidadeController {
    static mostrarCidades = (req, res) => {
        cidade.find((err, cidades) => {
            if(err){
                console.log(chalk.red(`Erro ao listar cidades ${err.message}`));
                res.status(500).send(`Error: ${err.message}`);
            }else{
                res.status(200).json(cidades);
            }
        })
    }

    static mostrarCidadePorId = (req, res) => {
        const id = req.params.id;
        cidade.findById(id, (err, cidade) => {
            if(err){
                console.log(chalk.red(`Erro ao listar cidades ${err.message}`));
                res.status(500).send(`Error: ${err.message}`);
            }else{
                res.status(200).json(cidade);
            }
        })
    }

    static cadastrarCidade = (req, res) => {
        //console.log(chalk.bgMagenta(req.body.nome_cidade));
        //res.send(req.body);
        let cidade_nova = new cidade(req.body);
        cidade_nova.save((err) => {
            if(err){
                console.log(chalk.red(err.message));
                res.status(500).send('Erro Interno de Servidor !!!');
            }else{
                res.status(201).json(cidade_nova.toJSON());
            }
        })

    }

    static atualizarCidade = (req, res) => {
        const id = req.params.id;
        cidade.findByIdAndUpdate(id, {$set: req.body}, (err,cidade) => {
            if(err){
                console.log(chalk.red(err.message));
                res.status(500).send('Erro Interno de Servidor !!!');
            }else{
                res.status(201).send('Cidade Atualizada Com Sucesso');
            }
        })
        
    }

    static excluirCidade = (req, res) => {
        const id = req.params.id;
        cidade.findByIdAndDelete(id, (err) => {
            if(err){
                console.log(chalk.red(err.message));
                res.status(500).send('Erro Interno de Servidor !!!');
            }else{
                res.status(201).send(`Cidade Excluida Com Sucesso: ${id}`);
            }
        })
    }


}

export default CidadeController;