var express = require('express');
var app = express();
var http = require('http').Server(app);
var appRouter = require('./routes/app');
var apiRouter = require('./routes/api');
var appPort = 3000;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/angular_site');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('connection opened');
});

app.use(appRouter).use(apiRouter);

http.listen(appPort, function(){
    console.log('listening on *:3000');
});