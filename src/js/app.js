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
// obteniendo ícono donde daremos click y contenedor 
let profileIconMobile = document.getElementById('profile-info-mobile');
let profileIcon = document.getElementById('profile-info');
let profileContainer = document.getElementById('profile-container');
let newMessagekey;

// observador estamos o no logueados
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // estamos logueados
    mandarUsuarioDatabase(user);
  } else {
    console.log('not logged in ');
  }
}); 

const mandarUsuarioDatabase = (user)=>{
  firebase.database().ref('users').set({
    username: user.displayName,
    email: user.email,
    profPicture: user.photoURL
  });
  pintarUsuario(user);
};

const pintarUsuario = (user)=>{
  profileContainer.innerHTML =
       `<div class="container center">
       <div class="row">
       <p>Bienvenid@ ${user.displayName}</p>
       <p> ${user.email}</p>
       <p>e-mail: ${user.photoURL}</p>
       </div>
       </div>`;
};
profileIconMobile.addEventListener('click', pintarUsuario);

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

firebase.database().ref('posts')
  .on('child_added', (newMessage) => {
    card.innerHTML +=
         `<div class="card blue lighten-3">
            <p><strong>${newMessage.val().creatorName}</strong>:</p>
            <p> ${newMessage.val().text}</p>
            <div class ="card-action">
            <button type= "button" class = "edit-message-btn">Editar</button>
           <button type="button" class = "delete-message-btn">Borrar</button>
         <i class=" small material-icons right">favorite</i>  
         </div>
        </div>`;
  });

// crear publicación por medio del DOM con template string

let deleteBtn = document.getElementsByClassName('delete-message-btn');
console.log(deleteBtn);

// cambiar de página a index.html
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', event => {
  firebase.auth().signOut();
  location.href = 'index.html';
});

// deleteBtn.addEventListener('click', ()=>{
//   console.log('holi');
// });

// firebase.database().ref('posts')
//   .on('child_removed', (newMessage) => {
//     console.log('has borrado correctamente');
//   });
// };


// const eliminarPostBD = ()=>{
//   firebase.database().ref('/posts/' + newMessagekey).remove();

// ----


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