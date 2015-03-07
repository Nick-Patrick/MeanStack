var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
   return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware({
   src: __dirname + '/public',
   compile: compile
}));
app.use(express.static(__dirname + '/public'));



var port = process.env.PORT || 3030;
app.listen(port);
if (env === 'development') {
    mongoose.connect('mongodb://localhost/meanTut');
} else {
    mongoose.connect('mongodb://npatrick:meantut@ds029187.mongolab.com:29187/meantut');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error..'));
db.once('open', function callback() {
    console.log('db opened');
});



app.get('/partials/*', function (req, res) {
    res.render('../../public/app/' + req.params[0]);
});

app.get('/*', function (req, res) {
    res.render('index');
});


console.log('Listening port: ' + port);