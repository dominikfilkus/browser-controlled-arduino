module.exports = {
    initRGBLed: initRGBLed
};

var five = require('johnny-five'),
    global = require('./global.js');

var ledRGB;

function initRGBLed() {
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
    global.io.sockets.on('connection', function (socket) {
        socket.on('blink', function (delay) {
            ledRGB.blink(delay);
        });

        socket.on('on', function () {
            ledRGB.on();
        });

        socket.on('off', function () {
            ledRGB.stop().off();
        });

        socket.on('color', function (color) {
            ledRGB.color(color);
        });

        socket.on('intensity', function (value) {
            ledRGB.intensity(value);
        });
    });
}