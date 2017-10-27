var httpServer = function () {
    var http = require('http'),
        url = require('url'),
        fs = require('fs'),

        start = function (port) {
            var server = http.createServer(function (req,res) {
                var pathname = url.parse(req.url).pathname;
                console.log(pathname);
                if(pathname === '/' || pathname === '/index.html'){
                    processHttpRequest(res);
                }
                else {
                    processJsonRequest(res, pathname);
                }
            });
            server.listen(port, function () {
                console.log('Listening on ' + port + '...');
            });
        },

        processHttpRequest = function (res) {
            fs.readFile(__dirname + '/index.html', function (err, data) {
                if(err){
                    res.writeHead(500);
                    return res.end('Error loading index.html');
                }
                res.writeHead(200);
                res.end(data);
            });
        },

        processJsonRequest = function(res, pathname){
            var json = '';
            switch (pathname){
                case '/customers':
                    json = '[{"firstName":"John", "lastName":"Doe"},' +
                    '{"firstName":"Jane", "lastName":"Doe"}]';
                    break;
                //Other cases could follow other paths
            }
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(json);
            res.end();
        };

    return{
        start: start
    }
}();
httpServer.start(9000);