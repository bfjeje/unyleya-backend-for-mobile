const http = require('http');
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.json({message: "Teste OK!"});
})

// app.get("/clientes", (req, res, next) => {
//     console.log("Retornou os clientes!");
//     res.json([{id:1, nome:'bruno'}]);
// })

app.post('/login', (req, res, next) => {
    if(req.body.user === 'bruno' && req.body.password === '123'){
        const id = 1;
        const token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300
        });
        return res.json({ auth: true, token: token});
    }

    res.status(500).json({message: 'Login invalido!'});
})

app.get('/clientes', verifyJWT, (req, res, next) => {
    console.log("Retornou todos clientes!");
    res.json([{id: 1, nome: 'bruno'}]);
})


function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).json({ auth: false, message: 'No token provided.'});

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if(err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}

const server = http.createServer(app);
server.listen(3000);
console.log("Servidor escutando na porta 3000...");