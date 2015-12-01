(function() {
    var socket = io.connect('http://localhost');

    document.querySelector('.blink__submit').addEventListener('click', function() {
        socket.emit('blink', parseInt(document.querySelector('.blink__input').value, 10));
    });

    document.querySelector('.power__on').addEventListener('click', function() {
        socket.emit('on');
    });

    document.querySelector('.power__off').addEventListener('click', function() {
        socket.emit('off');
    });

    document.querySelector('.color__submit').addEventListener('click', function() {
        socket.emit('color',document.querySelector('.color__input').value);
    });

    document.querySelector('.intensity__submit').addEventListener('click', function() {
        socket.emit('intensity', parseInt(document.querySelector('.intensity__input').value, 10));
    });

    socket.on('temperature', function(data) {
        document.querySelector('.temperature__value--celsius').value = data.celsius.toFixed(2);
        document.querySelector('.temperature__value--fahrenheit').value = data.fahrenheit.toFixed(2);
    });
}());