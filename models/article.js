var mongoose = require('mongoose');

module.exports = function (db) {

    var ArticleSchema = new mongoose.Schema({
        title: String,
        date: Date,
        preview: String,
        fulltext: String,
        image: String
    });
    var Article = mongoose.model('news', ArticleSchema);
  // Список документов
    var list = function (req, res, next) {
      Article.find({}, function (err, data) {
          if (err) next(err);
          res.send(data);
      });
    };

    // Один документ
    var get = function (req, res, next) {
        console.log('get anticle');
    try{
        var id = mongoose.Types.ObjectId(req.params.id);
    }
    catch (e){
        res.send(400);
    }
        Article.findOne({_id: id}, function (err, data) {
            if (err) next(err);
            if (data) {
                res.send(data);
            } else {
                res.send(404);
            }
        })
    };

    // Создаем документ
    var create = function (req, res, next) {
        Article.create(req.body, function (err, data) {
            if (err) {
                next(err);
            }
            res.send(data);
        });
    };

    // Обновляем документ
    var update = function (req, res, next) {
        try{var id = mongoose.Types.ObjectId(req.params.id)}
        catch (e){res.send(400)}

        Article.update({_id: id}, {$set: req.body}, function (err, numberAffected, data) {
            if (err) next(err);
            if (numberAffected) {
                res.send(200);
            } else {
                res.send(404);
            }
        })
    };

  // Удаляем документ
    var remove = function (req, res, next) {
        try{var id = mongoose.Types.ObjectId(req.params.id)}
        catch (e){res.send(400)}

        Article.remove({_id: id}, function (err, data) {
            if (err) next(err);
            res.send(data ? req.params.id : 404);
        });
    };

  return {
    model : Article,
    shema: ArticleSchema,
    list  : list,
    get   : get,
    create: create,
    update: update,
    remove: remove
  }
};