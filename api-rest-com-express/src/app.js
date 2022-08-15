import express from 'express';
import db from './config/dbConnect.js';

db.on("error", console.log.bind(console,'Erro de Conexão'));
db.once("open", ()=>{
    console.log('Conexão Com Banco Feita com Sucesso');
})
const app = express();
app.use(express.json());

const livros = [
    {
        "id":1,
        "titulo": "O Candido"
    },
    {
        "id":2,
        "titulo": "Harry Potter A Câmara Secreta"
    }
];

app.get('/', (req, res)=>{
    res.status(200).send('Curso de Node !');
});

app.get('/livros', (req, res)=>{
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res)=>{
    let indice = buscaLivro(req.params.id);
    res.status(201).json(livros[indice]);
});

app.post('/livros', (req, res)=>{
    livros.push(req.body)
    res.status(201).send('Livro Cadastrado com Sucesso !!');
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