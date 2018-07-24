// Añadir variable para referenciar todos los metodos de la base de datos
const db = firebase.database();
const commentText = document.getElementById('comment-text');
const commentSend = document.getElementById('send-comment');
const printComments = document.getElementById('comments');
// Impresion de mensajes
/* El metodo ready permite que al cargar la pagina, automaticamente
se manden pedir los datos a firebase*/
$(document).ready(() => {
  // Metodo child_added ayuda a que cada vez que un hijo(mensaje)
  // se añada, firebase añae asíncronamente el mensaje a un espacio
  // sin recargar la pagina
  db.ref('userMessages').on('child_added', (data) =>{// data trae todo los objetos de la rama
    $('#comments').append('<div>' + data.val().message + '</div>');
   });
});
// Añadir un observador al boton con vanilla js
commentSend.addEventListener('click', (event) =>{
  let userMessage = commentText.value;
  db.ref('userMessages').push({
    message: userMessage
  });
  console.log(userMessage);
});
