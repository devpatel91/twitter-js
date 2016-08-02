var express = require('express');
var app = express();
var chalk = require('chalk');
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes/');


app.set('views', __dirname + '/views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); 
swig.setDefaults({ cache: false})
app.use('/',routes);
app.use(morgan('GET / 200'))
app.use(function(req,res,next){
	console.log(chalk.yellow('I just used chalk and application-middleware chain, which could be just used in root'));
	next();
})


app.use(express.static("public"));

// app.get('/root',function(req,res){
// 	res.send("Welcome to the server")
// });
// app.get('/news',function(req,res){
// 	res.send("Your on the news page")
// });

// var locals = {
//     title: 'asdffds',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// var people = [{name: 'WOOT'}, {name: 'Stacker'}, {name: 'Son'}];
// app.get('/index',function(req,res) {res.render( 'index', {title: 'Hall of Fame', people: people} );
// })


// swig.renderFile('./views/index.html',locals, function (err, output) {
//   if (err) {
//     throw err;
//   }

//   console.log(output);
// });

var server = app.listen(3000,function(){
	console.log("server listening");
});