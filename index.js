const express = require("express");

const server = express();

server.use(express.json());

server.get('/', (req, resp)=>{
    return resp.json({ message: "Hello Node + express!"})
})

server.get('/welcome', (req, resp)=>{
    return resp.json({ message: "Welcome stranger"})
})

server.listen(3333);