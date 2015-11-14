module.exports = {
    initBoard: initBoard
};

var ledRGB, board, five, io;

function initBoard(server) {
    io = require('socket.io')(server);
    five = require('johnny-five');

    board = five.Board();
    board.on("ready", boardReady);
}

function boardReady() {
    ledRGB = new five.Led.RGB({
        pins: {
            red: 5,
            green: 6,
            blue: 3
        }
    });

    initSocketListeners();
}

function initSocketListeners() {
    io.sockets.on('connection', function (socket) {
        socket.on('blink', function (delay) {
            ledRGB.blink(delay);
        });

        socket.on('on', function() {
            ledRGB.on();
        });

        socket.on('off', function() {
            ledRGB.stop().off();
        });

        socket.on('color', function(color) {
            ledRGB.color(color);
        });

        socket.on('intensity', function(value) {
            ledRGB.intensity(value);
        });
    });
}