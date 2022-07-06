var http = require('http')
var fs = require('fs')

/**Criar uma função para aruqivos estáticos */

function lerArquivoEstatico(res, path, contentType, responseCode){
    if(!responseCode) responseCode = 200
    fs.readFile(__dirname + path, function(err, data){
        console.log('Directory: ' + __dirname)
        if(err){
            res.writeHead(500, {'Content-type': 'text/plain'})
            res.end('Internal Server Error - 505')
        }else{
            res.writeHead(responseCode, {'Content-Type': contentType})
            res.end(data)
        }
    })
}

http.createServer(function(req, res){
    path = req.url
    console.log('Show Path: ' + path)
    switch(path){
        case '/':
            lerArquivoEstatico(res,'/public/home.html','text/html')
            break;
        case '/about':
            lerArquivoEstatico(res,'/public/about.html','text/html')
            break;
        default:
            lerArquivoEstatico(res,'/public/notfound.html','text/html',404)
            break;
    }
}).listen(3000)


console.log('Server started on port 3000 .......')