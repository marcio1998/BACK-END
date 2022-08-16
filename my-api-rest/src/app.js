import express from 'express';
import chalk from 'chalk';
import db from './config/db.js'

const app = express();

db.on('error', console.log.bind(chalk.red('Databse Connection Error'),console))
db.once('open', ()=>{
    console.log(chalk.green('Database Connection Successfull'))
})


app.use((req, res)=>{
    res.status(404).send('Error 404');
})





export default app;