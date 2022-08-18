import express from 'express';
import cidadeRoute from './cidadeRoute.js';
import ImovelRoute from './ImovelRoute.js';


const routes = (app => {
    app.route('/').get((req, res) => {
        res.status(200).send('Hello !!')
    });

    app.use(
        express.urlencoded({extended:false}),
        express.json(),
        cidadeRoute,
        ImovelRoute
    );

    app.use((req, res) => {
        res.status(404).send('Error 404');
    });
});

export default routes;