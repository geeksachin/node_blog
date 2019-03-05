var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page:'Home', menuId: 'Index' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { page: 'About', menuId:'about' });
});

/* GET Blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { page: 'Blog', menuId:'blog' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact', menuId:'contact' });
});

module.exports = router;




