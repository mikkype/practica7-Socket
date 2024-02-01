const socket = io();

socket.on('message', (data) =>{
    console.log(data)
    imprimir(data);
})

function imprimir(data){
    var mensaje = document.getElementById('message');
    var html = ` 
    <div>
    <h5>${data.nombre} : ${data.text}</h5>
    </div>
    `;
    mensaje.innerHTML=html;

}



