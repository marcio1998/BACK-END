const express = require('express');

let app = express();

//set PORT
app.set('port', process.env.PORT || 3000);

//default route
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('default route')
})





//start server
app.listen(app.get('port'), function(){
    console.log('Server Running into port: ' + app.get('port') + '....');
});

