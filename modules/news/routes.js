var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article = require('./models/article')(mongoose.connection);

router.route('/api/news/:id')
    .get(article.get)
    .put(article.update)
    .delete(article.remove);

router.route('/api/news/')
    .get(article.list)
    .post(article.create);
module.exports = router;