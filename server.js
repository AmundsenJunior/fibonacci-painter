var express = require('express'),
  app = express(),
  http = require('http').Server(app);

// Load environmental variables
var dotenv = require('dotenv').load();
var appPort = process.env.APP_PORT;

// Initiate Express view engine
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('/css/:stylesheet', function(req, res) {
  res.sendFile(__dirname + '/css/' + req.params.stylesheet);
});

app.get('/js/:script', function(req, res) {
  res.sendFile(__dirname + '/js/' + req.params.script);
});

app.get('/processing/:sketch', function(req, res) {
  res.sendFile(__dirname + '/processing/' + req.params.sketch);
});

http.listen(appPort, function() {
  console.log('listening on port ' + appPort);
});

