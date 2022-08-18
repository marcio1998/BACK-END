import imovel from '../model/Imovel.js';
import chalk from 'chalk';

class ImovelController {

    static listarImoveis = (req, res) => {
        imovel.find()
            .populate('cidade')
            .exec((err, imoveis) => {
                if (err) {
                    console.log(chalk.red(`Erro ao cadastrar Imovel: ${err.message}`));
                    res.status(500).send(`Erro Servidor: ${err.message}`);
                } else {
                    res.status(201).json(imoveis);
                }
            })
    }

    static mostrarImovelPorId = (req, res) => {
        const id = req.params.id;
        imovel.findById(id)
            .populate('cidade')
            .exec((err, imovel) => {
                if (err) {
                    console.log(chalk.red(`Erro Servidor: ${err.message}`));
                    res.status(500).send(`Erro Servidor: ${err.message}`);
                } else {
                    res.status(201).json(imovel);
                }
            })
    }


    static cadastrarImovel = (req, res) => {
        let imovel_novo = new imovel(req.body);
        imovel_novo.save((err, imovel) => {
            if (err) {
                console.log(chalk.red(`Erro ao cadastrar Imovel: ${err.message}`));
                res.status(500).send(`Erro ao cadastrar Imovel: ${err.message}`);
            } else {
                res.status(201).json(imovel_novo);
            }
        })
    }

    static atualizarImovel = (req, res) => {
        const id = req.params.id;
        imovel.findByIdAndUpdate(id, {$set: req.body}, (err,imovel) => {
            if(err){
                console.log(chalk.red(err.message));
                res.status(500).send('Erro Interno de Servidor !!!');
            }else{
                res.status(201).send('imovel Atualizada Com Sucesso');
            }
        })
        
    }

    static excluirImovel = (req, res) => {
        const id = req.params.id;
        imovel.findByIdAndDelete(id, (err) => {
            if(err){
                console.log(chalk.red(err.message));
                res.status(500).send('Erro Interno de Servidor !!!');
            }else{
                res.status(201).send(`imovel Excluida Com Sucesso: ${id}`);
            }
        })
    }
}

export default ImovelController;