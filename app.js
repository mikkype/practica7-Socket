const express = require("express");
const app = express();

const http = require('http');
const server = http.createServer(app);

/*const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
 console.log('¡Un usuario se ha conectado')
});*/

app.get('/', (req, res) => {
    //res.send("<h1>app Chat</h1>")
    //console.log(__dirname);
   res.sendFile(`${__dirname}/cliente/index.html`);

   });
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
});