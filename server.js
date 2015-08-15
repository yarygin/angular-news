var express = require('express');
var app = express();
var http = require('http').Server(app);
var appRouter = require('./routes/app');
var apiRouter = require('./routes/api');
var appPort = 3000;

app.use(appRouter).use(apiRouter);

http.listen(appPort, function(){
    console.log('listening on *:3000');
});