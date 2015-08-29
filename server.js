var app = require('express')(),
    nconf = require('nconf'),
    http = require('http').Server(app),
    mongoose = require('mongoose'),
    root = require('path').dirname(require.main.filename);

nconf.argv()
    .env().file({ file: './config/main.json' });
var appPort = nconf.get('application:port');
var dbUri = nconf.get('mongoose:uri');


mongoose.connect(dbUri);
mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', console.log.bind(console, 'connection opened'));

app
    .use(require('./modules/application'))
    .use(require('./modules/news'))
    // для чпу
    .all('/*', function(req, res) {
        res.sendFile(root+'/public/index.html');
    });

http.listen(appPort, function(){
    console.log('listening on *:'+appPort);
});