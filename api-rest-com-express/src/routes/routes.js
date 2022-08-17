import express from 'express';
import LivroRoutes from './LivroRoutes.js';
import AutorRoutes from './AutorRoutes.js';

const routes = (app => {
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: "Curso de Node"})
    });

    app.use(
        express.json(),
        LivroRoutes,
        AutorRoutes,
    );
    
});

export default routes;