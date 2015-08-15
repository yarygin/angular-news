var express = require('express');
var router = express.Router();
var root = require('path').dirname(require.main.filename);
var publicPath = root + '/public';

router.get('/', function (req, res) {
    res.sendFile(publicPath+'/index.html');
}).use('/',express.static(publicPath));

module.exports = router;