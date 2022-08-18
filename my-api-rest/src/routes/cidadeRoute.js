import express from 'express';
import CidadeController from '../controller/CidadeController.js';

const router = express.Router();


router 
    .get('/cidade', CidadeController.mostrarCidades)
    .post('/cidade', CidadeController.cadastrarCidade)
    .get('/cidade/:id', CidadeController.mostrarCidadePorId)
    .put('/cidade/:id', CidadeController.atualizarCidade)
    .delete('/cidade/:id', CidadeController.excluirCidade)
    


export default router;

