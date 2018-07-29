const config = {
  apiKey: 'AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y',
  authDomain: 'social-network-5b9ef.firebaseapp.com',
  databaseURL: 'https://social-network-5b9ef.firebaseio.com',
  projectId: 'social-network-5b9ef',
  storageBucket: '',
  messagingSenderId: '1074635944561'
};
firebase.initializeApp(config);

// obteniendo imputs y botones globales
let card = document.getElementById('card');
let messageInput = document.getElementById('input-post');
let publicarBtn = document.getElementById('publicar-btn');
let deleteBtn = document.getElementsByClassName('delete-message-btn')[0];
// obteniendo ícono donde daremos click y contenedor 
let profileIcon = document.getElementById('profile-info');
let profileContainer = document.getElementById('profile-container');
let newMessagekey;


// botón de publicar para guardar información en la base de datos
publicarBtn.addEventListener('click', event => {
  let currentUser = firebase.auth().currentUser; // obtener al usuario con el propiedad .currentUser
  let messageValue = messageInput.value; // obtener el mensaje escrito 
  newMessagekey = firebase.database().ref().child('posts').push().key; // En ref se pone la ruta para encontrar los mensajes, luego ¿dónde los vamos a guardar? obteniendo una llave única para nuestros elementos de la colección messages. creo un elemento y saco esa llavve 
  firebase.database().ref(`posts/${newMessagekey}`).set({
    creator: currentUser.uid,
    creatorName: currentUser.displayName,
    UserEmail: currentUser.email,
    text: messageValue
  });
});

window.onload = () => {
  // observador estamos o no logueados
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // estamos logueados
      pintarUsuario(user);
      obtenerUsuarioDatabase(user);
    } else {
      console.log('not logged in ');
    }
  });
  // crear publicación por medio del DOM con template string
  firebase.database().ref('posts')
    .on('child_added', (newMessage) => {
      card.innerHTML +=
         `<div class="card blue lighten-3">
            <p>${newMessage.val().creatorName}:</p>
            <p> ${newMessage.val().text}</p>
            <div class ="card-action">
            <button class = "edit-message-btn">Editar</button>
           <button class = "delete-message-btn">Borrar</button>
         <i class=" small material-icons right">favorite</i>  
         </div>
        </div>`;
    });
  firebase.database().ref('posts')
    .on('child_removed', (newMessage) => {
      console.log('has borrado correctamente');
    });
};

// deleteBtn.addEventListener('click', eliminarPostBD);
// const eliminarPostBD = ()=>{
//   firebase.database().ref('/posts/' + newMessagekey).remove();
// };
 
const obtenerUsuarioDatabase = (user)=>{
  firebase.database().ref('users').set({
    username: user.displayName,
    email: user.email,
    profPicture: user.photoURL
  });
};

const pintarUsuario = (user)=>{
  firebase.database().ref('users')
    .on('child_added', (newUser) => {
      profileContainer.innerHTML =
       `<div class="container center">
       <div class="row">
       <p>Bienvenid@ ${newUser.val().username}</p>
       <p>e-mail: ${newUser.val().email}</p>
       </div>
       </div>`;
    });
};
profileIcon.addEventListener('click', pintarUsuario);


// cambiar de página a index.html
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', event => {
  firebase.auth().signOut();
  location.href = 'index.html';
});


//   const deleteMessagebtn = document.getElementsByTagName('button');

//   deleteMessagebtn.addEventListener('click', deletingMessage);

  
//   let borrar = firebase.database().ref().child('messages').push().key;
//   let refMessage ;
//   console.log(borrar);
//   const deletingMessage = () => {
//     let refMensaje = refMessage.child(borrar);
//     refMensaje.remove();
//   };
//   console.log(deletingMessage);