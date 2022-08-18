import express from 'express';
import ImovelController from '../controller/ImovelController.js';

const router = express.Router();

router
    .get('/imovel', ImovelController.listarImoveis)
    .post('/imovel', ImovelController.cadastrarImovel)
    .get('/imovel/:id', ImovelController.mostrarImovelPorId)
    .put('/imovel/:id', ImovelController.atualizarImovel)
    .delete('/imovel/:id', ImovelController.excluirImovel)


export default router;