# practica7-Socket
Practica 7  - Socket.io - Servidor

# Configura un servidor Node.js con Express y Socket.io. Crea una conexión básica de Socket.io y emite un mensaje cuando un nuevo cliente se conecta.
```bash
Iniciamos creando la carpeta de nuestro proyectos , instalando node express con el comando: npm i express y vemos que se crea la carpeta node_modules
Creamos el archivo app.js para configurar nuestro servidor .
Instalamos el paquete  de socket.i.o : npm install socket.i.o
Luego configuramos los parámetros de conexión del archivo app.js ,y en la terminal lo arrancamos con : node ./app.js

Creamos un archivo main.js y creamos un evento para que nos muestre que un usuario se ha conectado.
Entramos al navegador : localhost:3000

```
# Crear un Evento en el cliente para enviar mensajes al servidor
```bash
En el archivo main.js de parte del cliente creamos una función que nos permite transmitir los mensajes  a todos los clientes.
``` 

# Crear un Evento en el servidor  para transmitir mensajes a todo los clientes
```bash
En el archivo app.js del servidor , creamos el evento que va a transmitir a todos los clientes con la función socket.emit.
En nuestro html creamos un contenido div con un id que va a mostrarnos el mensaje de manera dinámica.
```

# Implementa una sala de chat simple utilizando Socket.io.
```bash
En el archivo app.js implementamos los eventos:
Crear un array donde tendremos la lista de usuarios
Un evento donde ingrese un nuevo usuario
Agregamos al usuario a la lista de usuarios
Un evento donde actualizamos a todos los usuarios
Un evento donde enviamos el mensaje del chat

En el archivo main.js implementamos los eventos :
Evento de envío de mensajes 
La función de enviar mensaje

y en el index.html 
Creamos las etiquetas para insertar usuario y mensajes y que nos muestre el contenido de ello.

Abrimos dos navegadores y comprobamos que podemos crear un chat.

# Seguimiento de Usuarios Conectados
En app.js vamos a crear eventos:
Agregar un usuario a la lista de usuarios conectados
Enviar la cantidad de usuarios a todos los conectados

Otro evento para cuando un usuario se desconecte se elimine y se actualice la lista de usuarios conectados.

En el main.js creamos eventos y funciones:
Un evento para recibir la cantidad de usuarios conectados y nos muestre por consola.
Una función para que nos actualice la cantidad de usuarios y nos pinte en el html.

```
# Agrega la capacidad de enviar mensajes privados entre usuarios
```bash
En el archivo app.js creamos un evento para enviar mensajes privados

En el main.js creamos eventos y funciones
Un evento para recibir mensajes privados

Una función para enviar mensajes privados al servidor

una función para imprimir los mensajes privados
```




