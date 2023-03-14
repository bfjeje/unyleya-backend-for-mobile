const http = require('http');
const server = http.createServer(function(req, resp){
    let html = ''
    if(req.url == "/"){
        html = `
        <html>
        <head>
        </head>
        <body>
            <h1>Home</h1>
        </body>
        </html>
        `
    }else if(req.url=="/livros"){
        html=`
        <html>
        <head>
        </head>
        <body>
            <h1>Lista de livros</h1>
        </body>
        </html>
        `
    }
    resp.end(
        html
    );
});
server.listen(3000);