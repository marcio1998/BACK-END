const chalk = require('chalk');
const my_functions = require('./my-functions')

function requestHandler(req, res){
    const method = req.method;
    const url = req.url;
    if(url == '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>Registration System</title>
                <meta charset='UTF-8'>
            </head>
            <body style="background:#f2f2f2">
                <h1 style="text-align:center">Welecome To The Registration System</h1>
                <h2 style="text-align:center">Contact Informations</h2>
                <form method='POST' action="/save" style="text-align:center">
                    <label for="fname">First Name: </label><br>
                    <input type="text" id="fname"  name = "fname"></input><br>
                    <label for="lname">Last Name: </label><br>
                    <input type="text" id="lname" name = "lname"></input><br>
                    <label for="telephone">Telephone: </label><br>
                    <input type="text" id="telephone" name="telephone"></input><br><br>
                    <input type="submit"></input>
                </form>
                <p style="text-align:center">
                    <a href="/contacts" style="color: gray">SEE ALL CONTACTS </a>
                </p>
                <footer>
                    <p style="text-align:center">&copy Márcio Gabriel</p>
                </footer>
            </body>
        </html>`)   
        res.statusCode = 302;
        return res.end();
    }else if(url == '/save' && method == 'POST'){
        const body = [];
        req.on('data', chunk=>{
            body.push(chunk);
        });
        return req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            //console.log(parseBody);
            let content = parseBody.split('&');
            my_functions.separateRequest(content);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }else if(method == 'GET' && url == '/contacts'){
        //console.log('OK');
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 302;
        const data = my_functions.showContacts();
        if(data == ''){
            res.write('<h1>ADD A NEW CONTACT</h1>')
        }else{
            res.write(data);
        }
        return res.end();

    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html')
        res.write("<h1 style='color:orange'>ROUTE NOT FOUND <bold style='color:red'>ERROR 404</bold></h1>");
        return res.end();
    }   

}

module.exports = {
    requestHandler: requestHandler
}


