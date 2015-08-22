var app = require('express')();
var nconf = require('nconf');
var http = require('http').Server(app);
var mongoose = require('mongoose');
var routers = [require('./routes/app'), require('./routes/api')];
var bodyParser = require('body-parser');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
nconf.argv()
    .env().file({ file: './config/main.json' });
var appPort = nconf.get('application:port');
var dbUri = nconf.get('mongoose:uri');

mongoose.connect(dbUri);
mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', function (callback) {
        console.log('connection opened');
    });

app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(allowCrossDomain)
    .use(routers)
    // для чпу
    .all('/*', function(req, res) {
        res.sendFile(__dirname+'/public/index.html');
    });

http.listen(appPort, function(){
    console.log('listening on *:'+appPort);
});