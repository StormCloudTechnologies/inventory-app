// server.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// configuration
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json



// listen (start app with node server.js) ======================================
app.listen(7500);
console.log("App listening on port 7500");

app.get('/', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

app.get('/index.html', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

app.get('/home.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});

app.get('/adduser.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});

app.get('/user.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});

app.get('/createproject.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});

app.get('/product.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});

app.get('/sold.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});

app.get('/sell.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});

app.get('/cart.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});

app.get('/outstock.html', function(req, res) {
    res.sendfile('./public/home.html'); // load our public/index.html file
});