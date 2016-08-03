var express = require('express');
var app = express();
var chalk = require('chalk');
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser')


app.set('views', __dirname + '/views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
swig.setDefaults({ cache: false})
app.use('/',routes);
app.use(morgan('GET / 200'))



app.use(express.static("public"));


var server = app.listen(3000,function(){
	console.log("server listening");
});