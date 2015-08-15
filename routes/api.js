var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article = require('../models/article')(mongoose.connection);

router.route('/api/news/')
    .get(article.list);
router.route('/api/news/:id')
    //.all(function(req, res, next){
    //    console.log(res);
    //    article.get(req, res, next);
    //})
    .get(function(req, res, next){
        console.log(res);
        article.get(req, res, next);
    })
    .put(article.create)
    .post(article.update)
    .delete(article.remove);
module.exports = router;