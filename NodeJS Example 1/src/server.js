var http = require('http');
var server = http.createServer(function (req, res){
    res.end('Hello World from the server');
});

server.listen(8080);