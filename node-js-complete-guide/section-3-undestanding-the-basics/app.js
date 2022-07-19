const http = require('http');
const fs = require('fs');


//create node server
const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    //process.exit()
    const url = req.url;
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter a Message</title></head>');
        res.write('<body>');
        res.write('<form action = "/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();  
    }else if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt',"DUMMY TEXT");
        res.statusCode(302);
        res.setHeader('Location', '/');
        return res.end();

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome to my node.js server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000)