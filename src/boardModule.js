module.exports = {
    initBoard: initBoard
};

var five = require('johnny-five'),
    Q = require('q');

function initBoard() {
    var deferred = Q.defer();

    board = five.Board();

    board.on('ready', function() {
        deferred.resolve();
    });

    return deferred.promise;
}
