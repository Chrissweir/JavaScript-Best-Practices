var httpServer = function() {
    var http = require('http'),
        url = require('url'),
        fs = require('fs'),

        start = function (port) {
            var server = http.createServer(function (req,res) {
                var pathname = url.parse(req.url).pathname;
                console.log(pathname);
                if(pathname === '/'){
                    pathname = '/index.html';
                    processHttpRequest(res, pathname);
                }
                else if(pathname === '/index.html'
                    || pathname === '/site.css'
                    || pathname === '/ps.js'
                    || pathname === '/jq.js'){
                    processHttpRequest(res, pathname);
                }
                else {
                    processJsonRequest(res, pathname);
                }
            });
            server.listen(port, function () {
                console.log('Listening on ' + port + '...');
            });
        },

        processHttpRequest = function (res, pathname) {
            fs.readFile(__dirname + pathname, function (err, data) {
                if(err){
                    res.writeHead(500);
                    return res.end('Error loading ' + pathname);
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
                case '/product_suggestion/1':
                    json = '{"id":"1","description":"Toyota","price":"120000"}'
                    break;
                case '/product_suggestion/2':
                    json = '{"id":"2","description":"Ford","price":"12000"}'
                    break;
                case '/product_suggestion/3':
                    json = '{"id":"3","description":"Honda","price":"100000"}'
                    break;
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