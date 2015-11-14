var express = require('express'),
    app = express(),
    path = require('path'),
    server = require('http').Server(app),
    boardModule = require('./src/boardModule.js');

server.listen(80);

app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

boardModule.initBoard(server);
