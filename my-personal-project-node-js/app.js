const express = require('express');
const handlebars = require('express3-handlebars').create({defaultLayout: 'index'});

const app = express();

//engine handlebars
app.engine('handlebars', handlebars.engine);
//set PORT
app.set('port', process.env.PORT || 3000);
//set handlebaras as view engine
app.set('view engine','handlebars');
//static files
app.use(express.static(__dirname + '/public'));

//default route
app.get('/', function(req, res){
    // res.type('text/plain');
    // res.send('default route');
    res.render('home')
});

//about route
app.get('/about', function(req, res){
    res.render('about')
})

//middlewares
app.use(function(req, res){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.use(function(req, res){
    res.status(404);
    res.render('404');
});


//set middlewares





//start server
app.listen(app.get('port'), function(){
    console.log('Server Running into port: ' + app.get('port') + '....');
});

