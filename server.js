var http = require("http");

const server = http.createServer(function(request, response) {
    console.log(request.url);
    response.end('Hello World\n');
});

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000);