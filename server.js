const express = require('express');
const server = express();
const path = require('path');


server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.get('/app.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/app.css'));
});

server.get('/app.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/app.js'));
});

// server.get('/hi', function(req, res) {
//     res.send('Sod Off!');
// });

server.listen(3000, function() {
    console.log('Server started');
});
