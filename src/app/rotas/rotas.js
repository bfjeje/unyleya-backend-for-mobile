module.exports = (app) => {

    app.get('/', function(req, resp){
        resp.send(`
            <html>
            <head>
            </head>
            <body>
                <h1>Home - Pos Graduacion</h1>
            </body>
            </html>
            `
        );
    });

    app.get('/livros', function(req, resp){
        resp.send(`
            <html>
            <head>
            </head>
            <body>
                <h1>Lista de livros</h1>
            </body>
            </html>
            `
        );
    });

}