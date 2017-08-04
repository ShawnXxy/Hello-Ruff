'use strict';

// Use http to report led's status
var http = require('http');
var option = {
    host: 'httpbin.org', // httpbin is a setuponline http service
    path: '/post',
    method: 'POST',
    headers: {

    }
};
function postState(state) {
    options.headers['Content-Length'] = state.length;
    var req = http.request(options, function(res) {
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    req.write(state);
    req.end();
}


$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    // lightup "#led-r" when #button is pressed
    $('#button').on('push', function() {
        console.log('Button pushed.');
        $('#led-r').turnOn();
    });
    // lightdown '#led-r' when #button is released
    $('#button').on('release', function() {
        console.log('Button released.');
        $('#led-r').turnOff();
    });

    // $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
