initiaziling();
// __ Function Share Comment:
let comments = []; // Where the array is gonna live

function share() {
  comments.push(input.value);
  printComments(comments);
  input.value = ''; // The string is empty because it fills when the user send the comment
}

function printComments(comments) {
  output.innerHTML = ''; // It's empty until the function fills it.
  comments.forEach(function(value) {
    node = document.createElement('p'); // We create a dinamic paragraph
    text = document.createTextNode(value);
    node.appendChild(text);
    output.appendChild(node);
  });
};
// Función para cerrar con LogOut
const cerrar = () =>{
  let contenido = document.getElementById('container');
  firebase.auth().signOut()
    .then(function() {
      console.log('Cerrar sesion');
      contenido.innerHTML = '';
    })
    .catch(function() {
      console.log(error);
    });
};

// Impresión de nombre y botón de LogOut
document.getElementById('container').innerHTML = `<p>${'Bienvenido'}${' '}${'usuario'}</p>
<button class="btn btn-primary" type="button" id="buttonLogout" onclick="cerrar()">LogOut</button>`;
