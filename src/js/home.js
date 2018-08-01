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
const userActive = () =>{
  firebase.auth().onAuthStateChanged((user) =>{
    if (user) {
      let displayName = user.displayName;
      let userPhoto = user.photoURL;
      let userEmail = user.email;
      // Impresión de nombre y botón de LogOut
      document.getElementById('userName').textContent = displayName;
      // document.getElementById('userEmail').textContent = userEmail;
      document.getElementById('userPhoto').style.background = 'url(' + userPhoto + ')';
      document.getElementById('buttonLogout').innerHTML = `
      <button class="btn btn-link" type="button" id="buttonLogout" onclick="cerrar()">LogOut</button>`;
    }
  });
};
window.onload = () =>{
  userActive();
};
