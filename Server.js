const http = require('http');
const server = http.createServer(function(req, resp){
    resp.end(`
        <html>
        <head>
        </head>
        <body>
            Hola
        </body>
        </html>
        `
    );
});
server.listen(3000);