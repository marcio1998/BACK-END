
import app from './src/app.js';
import chalk from 'chalk';
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(chalk.cyan(`Servidor Rodando na porta: ${PORT}`));
})

