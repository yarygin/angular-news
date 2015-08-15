var express = require('express');
var router = express.Router();
var news = [
    {
        "id": "1",
        "title": "Новость 1",
        "date": "2015-01-23 10:11:22",
        "preview": "Анонс новости 1",
        "fulltext": "Полный текст новости 1",
        "image": "/images/news/1.jpg"
    },
    {
        "id": "2",
        "title": "Новость 2",
        "date": "2015-03-03 18:01:45",
        "preview": "Анонс новости 2",
        "fulltext": "Полный текст новости 2",
        "image": "/images/news/2.jpg"
    },
    {
        "id": "3",
        "title": "Новость 3",
        "date": "2015-06-18 23:45:03",
        "preview": "Анонс новости 3",
        "fulltext": "Полный текст новости 3",
        "image": "/images/news/3.jpg"
    }
];
router.route('/api/news/:id')
    .all(function(req, res, next) {
        next();
    })
    .get(function(req, res, next) {
        var ret = news.filter(function(item){
            return item.id == req.params.id;
        });
        console.log(req.params.id);
        res.json(parseInt(req.params.id)?ret[0]:news);
    })
    .put(function(req, res, next) {
        res.json(req.params);
    })
    .post(function(req, res, next) {
        next(new Error('not implemented'));
    })
    .delete(function(req, res, next) {
        next(new Error('not implemented'));
    });

router.route('/api/news/')
    .get(function(req, res, next) {
        res.json(news);
    });
module.exports = router;