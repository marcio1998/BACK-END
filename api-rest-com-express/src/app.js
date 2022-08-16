import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/routes.js';

db.on("error", console.log.bind(console,'Erro de Conexão'));
db.once("open", ()=>{
    console.log('Conexão Com Banco Feita com Sucesso');
})
const app = express();
app.use(express.json());
routes(app);

app.get('/livros/:id', (req, res)=>{
    let indice = buscaLivro(req.params.id);
    res.status(201).json(livros[indice]);
});

app.put('/livros/:id', (req, res)=>{
    let indice = buscaLivro(req.params.id);
    livros[indice].titulo = req.body.titulo;
    res.status(201).json(livros);
});


app.delete('/livros/:id', (req, res)=>{
    let {id} = req.params;
    let indice = buscaLivro(id);
    livros.splice(indice,1);
    res.status(201).send(`Livros de Id: ${id} removido com sucesso`);
});

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id == id
    })
}

export default app;