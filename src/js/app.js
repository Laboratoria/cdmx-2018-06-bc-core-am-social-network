
const config = {
  apiKey: 'AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y',
  authDomain: 'social-network-5b9ef.firebaseapp.com',
  databaseURL: 'https://social-network-5b9ef.firebaseio.com',
  projectId: 'social-network-5b9ef',
  storageBucket: '',
  messagingSenderId: '1074635944561'
};
firebase.initializeApp(config);

const card = document.getElementById('card'); 
// Firebase database
let messageInput = document.getElementById('input-post');
let publicarBtn = document.getElementById('publicar-btn');
// let card = document.getElementById('card');
publicarBtn.addEventListener('click', event1=>{
  let currentUser = firebase.auth().currentUser; // obtener al usuario
  let messageValue = messageInput.value; // obtener el mensaje escrito

  const newMessagekey = firebase.database().ref().child('messages').push().key; // En ref se pone la ruta para encontrar los mensajes, luego ¿dónde los vamos a guardar? obteniendo una llave única para nuestros elementos de la colección messages. creo un elemento y saco esa llavve
  firebase.database().ref(`messages/${newMessagekey}`).set({ 
    creator: currentUser.uid,
    creatorName: currentUser.displayName,
    UserEmail: currentUser.email,
    text: messageValue
  });
});


window.onload = ()=>{
  firebase.auth().onAuthStateChanged(user => { // cambiar el estado de logeado a no logeado
    if (user) {
    // estamos logueados
      console.log(user);
    // location.href = '../src/views/view1.html';
    } else {
    // no estamos logueados
      console.log('not logged in ');
    }
  });
  firebase.database().ref('messages')
    .on('child_added', (newMessage)=>{
      card.innerHTML += `<p>${newMessage.val().creatorName}</p>
  <p>${newMessage.val().text}</p>`;
    });
};


const logoutBtn = document.getElementById('logout-btn');
logoutBtn. addEventListener('click', event=>{
  firebase.auth().signOut();
  location.href = 'index.html';
});


// `<div class="card grey lighten-3">
// <div class="card-content white-text">
//           <p>${}</p>
//           </div>
//           <div class="card-action">
//           <i class="small material-icons right">mode_edit</i>
//           <i class="small material-icons right">favorite</i>
//           </div>
//           </div>`;