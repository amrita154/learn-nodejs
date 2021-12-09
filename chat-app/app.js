const express = require('express');
const http = require("http");
const path = require('path');
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = socket(server);

app.use(express.static(path.join(__dirname,'./public')))

io.on('connection', () => {
    console.log("connection successful")
})

server.listen(3000, () => {
    console.log("server listening");
});
