
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
                <footer>
                    <p style="text-align:center">&copy Márcio Gabriel</p>
                </footer>
            </body>
        </html>`)
        res.statusCode = 302;
        return res.end();
    }if(url == '/save' && method == 'POST'){
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>OK!!!!</h1>");
        res.statusCode = 302;
        return res.end();
    }

}

export default requestHandler;


