const express = require("express");

const server = express();

const db = require("db");

const products = [];
let id = 0;

server.use(express.json());

server.get("/products/:productId", (req, res) => {
    const { productId } = req.params;

    const product = products.find(p => p.id === Number(productId));

    if(!product){
        return res.status(400).json({ error: "Produto não encontrado"});
    }

    return res.json(product);
})

server.get("/products", (req, res) => {
    return res.json(products);
})

server.post("/products", (req, res) => {
    const { name , price } = req.body;

    products.push({
        id: ++id,
        name,
        price
    });

    return res.json(products.slice(-1)[0]);
});

server.listen(3333);

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:ramosl@localhost:3306/crud");
    console.log("Conectou com MySQL");
    global.connection = connection;
    return connection;
}