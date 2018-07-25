// Añadir variable para referenciar todos los metodos de la base de datos
const db = firebase.database();
const commentText = document.getElementById('comment-text');
const commentSend = document.getElementById('send-comment');
const printComments = document.getElementById('comments');
const addLikes = document.getElementById('likes');
const likeCounter = document.getElementById('likeCounter');

// Impresion de mensajes
/* El metodo ready permite que al cargar la pagina, automaticamente
se manden pedir los datos a firebase*/
$(document).ready(() => {
  // Metodo child_added ayuda a que cada vez que un hijo(mensaje)
  // se añada, firebase añae asíncronamente el mensaje a un espacio
  // sin recargar la pagina
  let result = db.ref('userMessages').on('child_added', (data) =>{// data trae todo los objetos de la rama
    $('#comments').append('<div class="cuadro">' + data.val().message + '</div>');
  });
});

//id en html comments

// Añadir un observador al boton con vanilla js
commentSend.addEventListener('click', (event) =>{
  let userMessage = commentText.value;
  db.ref('userMessages').push({
    message: userMessage
  });
  console.log(userMessage);
});

// contador de likes
let countLikes = 0;
const addLike = () => {
  countLikes = countLikes + 1;
  document.getElementById('likeCounter').textContent = countLikes;
}
