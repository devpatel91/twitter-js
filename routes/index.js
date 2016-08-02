var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { tweets: tweets } );
});


router.get('/users/:name', function(req, res) {

  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', {tweets :list}  );
});

router.get('/tweet/:id',function(req,res){
	var id = parseInt(req.params.id);
	var list1 = tweetBank.find({id:id});
	res.render('index',{tweets:list1}); 
});

module.exports = router;