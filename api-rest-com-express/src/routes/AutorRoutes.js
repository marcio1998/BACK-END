import  express  from "express";
import AutoresController from '../controllers/AutoresController.js';

const router = express.Router();


router
    .get('/autor',AutoresController.listarAutores)
    .get('/autor/:id', AutoresController.obterAutorPorId)
    .post('/autor',AutoresController.cadastrarAutor)
    .put('/autor/:id', AutoresController.atualizarAutor)
    .delete('/autor/:id', AutoresController.excluirLAutor)



export default router;