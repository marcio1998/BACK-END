const http = require('http');


//create node server
const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    //process.exit()
});

server.listen(3000)