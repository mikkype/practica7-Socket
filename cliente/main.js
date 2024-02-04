const socket = io();

// Evento para recibir la cantidad de usuarios conectados
socket.on("usuariosConectados", (cantidadUsuarios) => {
  console.log("Cantidad de usuarios conectados:", cantidadUsuarios);
  actualizarCantidadUsuarios(cantidadUsuarios);
});

socket.on("message", (data) => {
  console.log(data);
  imprimir(data);
});

// Evento para recibir mensajes privados
socket.on("privateMessage", (data) => {
  console.log(data);
  imprimirPrivado(data);
});

// Función para imprimir los mensajes 
function imprimir(data) {
  const mensajesDiv = document.getElementById("mensajes");
  const mensajeElement = document.createElement("p");
  mensajeElement.textContent = `${data.nombre} : ${data.text}`;
  mensajesDiv.appendChild(mensajeElement);
}

// Función para imprimir los mensajes privados
function imprimirPrivado(data) {
  const mensajesDiv = document.getElementById("mensajesPrivados");
  const mensajeElement = document.createElement("p");
  mensajeElement.textContent = `${data.nombre} a ${data.receptor}: ${data.text}`;
  mensajesDiv.appendChild(mensajeElement);
}

// Función para enviar mensajes al servidor
function enviarMensaje() {
  const nombreUsuario = document.getElementById("nombreUsuario").value;
  const mensaje = document.getElementById("mensaje").value;
  const data = {
    nombre: nombreUsuario,
    text: mensaje,
  };
  socket.emit("message", data);
  document.getElementById("mensaje").value = "";
}

 // Función para enviar mensajes privados al servidor
 function enviarMensajePrivado() {
  var nombreUsuario = document.getElementById("nombreUsuario").value;
  var mensaje = document.getElementById("mensaje").value;
  var receptor = document.getElementById("receptor").value;

  var data = {
    nombre: nombreUsuario,
    text: mensaje,
    receptor: receptor,
  };

  socket.emit("privateMessage", data);
  
}




  
  
  // Función para actualizar la cantidad de usuarios
  function actualizarCantidadUsuarios(cantidadUsuarios) {
    const usuariosDiv = document.getElementById("usuarios");
    usuariosDiv.innerHTML = `<p>Cantidad de usuarios conectados: ${cantidadUsuarios}</p>`;
  }


 