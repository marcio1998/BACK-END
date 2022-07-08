var express = require('express');
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
// ./ -> inidicates not to look into node_modules
var fortune = require('./lib/fortune');;

var app = express();

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

// const fortunes = [
//     'Conquer your fears or the will conquer you !',
//     'Rivers need spring',
//     "Don't fear what you don't know"
// ]

//set test page
app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
})

//default status code is 200
app.get('/', function(req, res){
    // res.type('text/plain');
    // res.send('Meadowlark Travel');
    res.render('home');
});

app.get('/about', function(req, res){
    // res.type('text/plain');
    // res.send('About Meadowlar Travel');
    //let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', {fortune: fortune.getFortune()});
    //test
    pageTestScript: '/qa/tests-about.js'
});

//static files
app.use(express.static(__dirname + '/public'))

//custom 404 page
app.use(function(req, res){
    //res.type('text/plain');
    res.status(404);
   // res.send('404 - Not Found');
    res.render('404');
});

//Custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    //res.type('text/plain');
    res.status(500);
    //res.send('505 - Server Error');
    res.render('500')
});

app.listen(app.get('port'), function(){
    console.log('Express started on http:// localhost: ' + app.get('port') + '; press ctrl + c to terminate');
})