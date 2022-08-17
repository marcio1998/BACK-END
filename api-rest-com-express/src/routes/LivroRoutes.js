import  express  from "express";
import LivroController from '../controllers/LivroController.js';

const router = express.Router();


router
    .get('/livros',LivroController.listarLivros)
    .get('/livros/busca', LivroController.listarLivroPorEditora)
    .get('/livros/:id', LivroController.obterLivroPorId)
    .post('/livros',LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.excluirLivro)



export default router;