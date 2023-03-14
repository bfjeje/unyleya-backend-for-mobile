

const app = require("./src/config/custom-express");

app.listen(3000,function(){
    console.log("Servidor rodando na porta 3000");
});


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
