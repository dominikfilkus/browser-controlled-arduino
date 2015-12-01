var express = require('express'),
    app = express(),
    path = require('path'),
    server = require('http').Server(app),
    global = require('./src/global.js');

global.io = require('socket.io')(server);

var boardModule = require('./src/boardModule.js'),
    rgbLedModule = require('./src/rgbLedModule'),
    thermoMeterModule = require('./src/thermoMeterModule');

server.listen(80);

app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

boardModule.initBoard().then(function() {
    rgbLedModule.initRGBLed();
    thermoMeterModule.initThermoMeter();
});

