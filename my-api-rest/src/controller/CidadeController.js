import chalk from 'chalk';
import cidade from '../model/Cidade.js';

class CidadeController {
    static cadastrarCidade = (req, res) => {
        console.log(chalk.bgMagenta(req.body.nome_cidade));
        res.send(req.body);
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
}

export default CidadeController;