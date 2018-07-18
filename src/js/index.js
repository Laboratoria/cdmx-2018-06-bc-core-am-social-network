// Inicializar Firebase
// const config = {
//   apiKey: 'AIzaSyCt9yjfxwLkam9k--FRqUyqn-nw2pOgrdY',
//   authDomain: 'diabetessocialmedia.firebaseapp.com',
//   databaseURL: 'https://diabetessocialmedia.firebaseio.com',
//   projectId: 'diabetessocialmedia',
//   storageBucket: 'diabetessocialmedia.appspot.com',
//   messagingSenderId: '1728202919'
// };
// firebase.initializeApp(config);
//
// // Con Gmail de Google
// const authentificationsUsers = document.getElementById('button');
// authentificationsUsers.addEventListener('click', (event) =>{
//   authGoogle();
// });
// authGoogle = () => {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   authentificating(provider);
// };
//
// authentificating = (provider) =>{
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//   // Da el Token de acceso a Google. Usar para acceder a la API de Google
//     var token = result.credential.accessToken;
//     // Datos del usuario logeado
//     var user = result.user;
//     console.log(result);
//   }).catch(function(error) {
//   // enerar error
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // Este email ya esta en uso
//     var email = error.email;
//     console.log(email);
//     // Los permisos del firebase.auth.AuthCredential ya fueron usados.
//     var credential = error.credential;
//     console.log(credential);
//   });
// };
//
// registrar = () =>{
//   let email = document.getElementById('userEmail').value;
//   let password = document.getElementById('userPsw').value;
//   let userName = document.getElementById('username').value;
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(function() {
//       verificarEmail();
//     })
//     .catch(function(error) {
//       // Manejo de errores
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
// };
// ingresar = () =>{
//   let emailU = document.getElementById('uEmail').value;
//   let passwordU = document.getElementById('uPsw').value;
//   firebase.auth().signInWithEmailAndPassword(emailU, passwordU)
//     .then(function() {
//       observadorEmail();
//     })
//     .catch(function(error) {
//       // Manejo de error
//       var errorCode = error.code; console.log(errorCode);
//       var errorMessage = error.message; console.log(errorMessage);
//       // ...
//     });
// };
//
// observadorEmail = ()=>{
//   let nameU = document.getElementById('uName').value;
//   console.log(nameU);
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       userSpace(nameU);
//       // Usuario logeado
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       console.log('Activo');
//     } else {
//       console.log('No hay usuario');
//     }
//   });
// };
// // observadorEmail();
//
// userSpace = (user)=>{
//   let nameU = user;
//   let contenido = document.getElementById('container');
//   contenido.innerHTML = `<p>${'Bienvenido'}${' '}${nameU}</p>
//   <button type="button" id="buttonLogout" onclick="cerrar()">LogOut</button>`;
// };
// cerrar = () =>{
//   let contenido = document.getElementById('container');
//   firebase.auth().signOut()
//     .then(function() {
//       console.log('Cerrar sesion');
//       contenido.innerHTML = '';
//     })
//     .catch(function() {
//       console.log(error);
//     });
// };
//
// verificarEmail = ()=>{
//   let vefificarU = firebase.auth().currentUser;
//   vefificarU.sendEmailVerification().then(function() {
//     console.log('enviando email');
//   }).catch(function() {
//     console.log(error);
//   });
// };
/* const userPrintSpace = document.getElementById('obj');
let database = firebase.database().ref().child('obj');
database.on('value', snap => console.log(snap.val()));*/

// __ Function Share Comment:
let comments = []; // Where the array is gonna live

function share() {
  comments.push(input.value);
  console.log(comments);
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
}

const output = document.getElementById('comentarios');
const input = document.getElementById('entrada');


//
//
// let comment = document.getElementById('entrada');
//
// const share = () => {
//   let comentario = comment.value;
//   const getCommits = document.getElementById('comentarios');
//   // EN algún lugar le tengo que insertar la información comentario
//   // `<textarea id="demo" cols="20" rows="3" class="form-control" readonly="true"></textarea>`
// };
