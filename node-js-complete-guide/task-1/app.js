import http from 'http';
import routes from './routes.js';


const server = http.createServer(routes).listen(3000)