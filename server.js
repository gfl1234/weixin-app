var http = require("http");
var fs = require('fs');
var server = http.createServer();
server.on('request', function (request, response) {
    if (request.url === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return console.log(err.message);
            }
            response.end(data);
        });
    }   
    else if (request.url.indexOf("/views/css") != -1 || request.url.indexOf("/views/images") != -1 || request.url.indexOf("/views/js") != -1 || request.url.indexOf("/views") != -1) {
        var url = '.' + request.url;
        fs.readFile(url, function(err, data){
            if(err) {
                return console.log(err.message);
            } 
            response.end(data);
        });
    }
});
server.listen(3333, function () {
    console.log('服务器开启成功');
});

