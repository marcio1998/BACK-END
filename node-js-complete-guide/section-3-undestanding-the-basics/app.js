import http from 'http';
import routes from './routes.js';


//create node server
const server = http.createServer(routes);

server.listen(3000)