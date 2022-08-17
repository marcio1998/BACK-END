import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/routes.js';

db.on("error", console.log.bind(console,'Erro de Conexão'));
db.once("open", ()=>{
    console.log('Conexão Com Banco Feita com Sucesso');
})
const app = express();
routes(app);
export default app;