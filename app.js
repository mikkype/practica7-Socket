const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static(__dirname + "/cliente"));


app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/cliente/index.html`);
});

let usuariosConectados = [];

io.on("connection", (socket) => {
    console.log("¡Un usuario se ha conectado!");
    
  
    // Agregar el usuario a la lista de usuarios conectados
    usuariosConectados.push(socket.id);
  
    // Enviar la cantidad de usuarios conectados a todos los clientes
    io.emit("usuariosConectados", usuariosConectados.length);
  
    // Evento para enviar mensajes al chat
  socket.on("message", (data) => {
    io.emit("message", data);
  });


  // Evento para recibir mensajes privados
  socket.on("privateMessage", (data) => {
  
    io.to(data.receptor).emit("privateMessage", data);
  });

  
    // Evento de desconexión de socket
    socket.on("disconnect", () => {
      console.log("¡Un usuario se ha desconectado!");
  
      // Eliminar el usuario de la lista de usuarios conectados
      usuariosConectados = usuariosConectados.filter((id) => id !== socket.id);
  
      // Enviar la cantidad de usuarios conectados a todos los clientes
      io.emit("usuariosConectados", usuariosConectados.length);
    });
  });

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});