var app = require('express')();
var nconf = require('nconf');
nconf.argv()
    .env().file({ file: './config/main.json' });

var http = require('http').Server(app);
var routers = [require('./routes/app'), require('./routes/api')];
var appPort = nconf.get('application:port');
var dbUri = nconf.get('mongoose:uri');
var mongoose = require('mongoose');

mongoose.connect(dbUri);
mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', function (callback) {
        console.log('connection opened');
    });

app.use(routers);

http.listen(appPort, function(){
    console.log('listening on *:'+appPort);
});