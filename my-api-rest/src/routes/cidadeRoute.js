import express from 'express';
import CidadeController from '../controller/CidadeController.js';

const router = express.Router();


router 
    .post('/cidade', CidadeController.cadastrarCidade)


export default router;

