initiaziling();
// Variables referidad a espacios del DOM
const commentText = document.getElementById('comment-text');
const commentSend = document.getElementById('send-comment');
const printComments = document.getElementById('comments');
const addLikes = document.getElementById('likes');
const likeCounter = document.getElementById('likeCounter');

/* Impresion de mensajes
El metodo ready permite que al cargar la pagina, automaticamente
se manden pedir los datos a firebase*/
// $(document).ready(() => {
/* En result se agrega una referencia a la base de datos (db) que se dirige
	a la rama "userMessage", donde se acumulan los mensajes generados en la app y con el metodo child_added
	cada vez que un hijo(mensaje) se añada, firebase añade asíncronamente el mensaje a un espacio sin recargar la pagina.  */
// let result = db.ref('userMessages').on('child_added', (data) =>{ // data trae todo los objetos de la rama
// $('#comments').append('<div class="panel-body">' + data.val().message + '</div>'); /* Templete string que genera una llamada
// a la rama de mensajes e imprime -concatenando- en el DOM (espacio con id = 'comments') los mensajes acuamulados dentro de un div c/u */
// });
// });
// Añadir un observador al boton con vanilla js
// commentSend.addEventListener('click', (event) =>{ // Si detecta el evento del boton...
// let userMessage = commentText.value; // Toma el texto del text area ...
//  db.ref('userMessages').push({ // Guarda el texto y lo guarda con push en la rama mensajes del db
// message: userMessage // Guarda el mensaje como una propiedad de la rama
//  });
// });

// Contador de likes
let countLikes = 0;
const addLike = () => { /* Cuando sucede una llamada al evento del boton like, se acumula un punto que se mostrara al lado */
  countLikes = countLikes + 1;
  document.getElementById('likeCounter').textContent = countLikes;
};
