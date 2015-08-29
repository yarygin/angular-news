var express = require('express');
var router = express.Router();
var root = require('path').dirname(require.main.filename);
var publicPath = root + '/public';
var bodyParser = require('body-parser');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

router
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(allowCrossDomain)
    .use('/',express.static(publicPath))
    .get('/', function (req, res) {
        res.sendFile(publicPath+'/index.html');
    });

module.exports = router;