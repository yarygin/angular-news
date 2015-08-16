var app = require('express')();
var nconf = require('nconf');
var http = require('http').Server(app);
var mongoose = require('mongoose');
var routers = [require('./routes/app'), require('./routes/api')];

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

app.use(routers);

http.listen(appPort, function(){
    console.log('listening on *:'+appPort);
});