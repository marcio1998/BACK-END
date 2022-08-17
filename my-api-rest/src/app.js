import express from 'express';
import chalk from 'chalk';
import db from './config/db.js'

import routes from './routes/Routes.js';

const app = express();

db.on('error', console.log.bind(chalk.red('Erro de Conexão com o banco de dados: '), console))
db.once('open', () => {
    console.log(chalk.green('Conexão com o banco sucedida'))
});

routes(app);
export default app;