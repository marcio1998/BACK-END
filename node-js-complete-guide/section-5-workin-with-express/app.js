const express = require('express');
const http = require('http');

const app = express();

app.use((req, res, next) => {
    console.log('MiddleWare');
    next();
});

app.use((req, res, next) => {
    console.log('Another MiddleWare');
});

const server = http.createServer(app).listen(3000);
