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
publicarBtn.addEventListener('click', event1 => {
  let currentUser = firebase.auth().currentUser; // obtener al usuario
  let messageValue = messageInput.value; // obtener el mensaje escrito
  const newMessagekey = firebase.database().ref().child('posts').push().key; // En ref se pone la ruta para encontrar los mensajes, luego ¿dónde los vamos a guardar? obteniendo una llave única para nuestros elementos de la colección messages. creo un elemento y saco esa llavve
  firebase.database().ref(`posts/${newMessagekey}`).set({
    creator: currentUser.uid,
    creatorName: currentUser.displayName,
    UserEmail: currentUser.email,
    text: messageValue
  });
});


window.onload = () => {
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
};


const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', event => {
  firebase.auth().signOut();
  location.href = 'index.html';
});

