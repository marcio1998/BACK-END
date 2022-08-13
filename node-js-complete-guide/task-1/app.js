const http = require('http');
const routes  = require('./routes.js');


const server = http.createServer(routes.requestHandler).listen(3000)