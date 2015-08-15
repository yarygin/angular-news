var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article = require('../models/article')(mongoose.connection);
router.route('/api/news/:id')
    .all(article.list)
    .get(article.get)
    .put(article.create)
    .post(article.update)
    .delete(article.remove);

router.route('/api/news/')
    .get(function(req, res, next) {
        res.json(news);
    });
module.exports = router;