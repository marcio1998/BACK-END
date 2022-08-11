import fs from 'fs';
import chalk from 'chalk'

function requestHandler(req, res){
    const url = req.url;
    const method = req.method;
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
        const body= [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end', ()=> {
            const parseBody = Buffer.concat(body).toString();
            console.log(chalk.red(parseBody));
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            
        })
        //fs.writeFileSync('message.txt',"DUMMY TEXT");
        

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome to my node.js server</h1></body>');
    res.write('</html>');
    res.end();
}

export default requestHandler;