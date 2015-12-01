module.exports = {
    initThermoMeter: initThermoMeter
};

var five = require('johnny-five'),
    global = require('./global.js');

var thermoMeter,
    temperature = {
        celsius: 0,
        fahrenheit: 0
    };

function initThermoMeter() {
    thermoMeter = new five.Temperature({
        controller: "TMP36",
        pin: "A0"
    });

    thermoMeter.on("data", function() {
        temperature.celsius = this.celsius;
        temperature.fahrenheit = this.fahrenheit;
    });

    initSocketListeners();
}

function initSocketListeners() {
    global.io.sockets.on('connection', function (socket) {

        setInterval(function() {
            socket.emit('temperature', temperature);
        }, 500);
    });
}