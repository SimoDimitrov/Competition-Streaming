var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/results',ensureAuthenticated, function(req, res){
  res.render('results', {
    title: 'Results'
  });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;
