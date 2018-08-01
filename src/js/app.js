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
let editButton = document.getElementsByClassName('edit-message-btn');
// obteniendo  contenedor para el perfil
let profileContainer = document.getElementById('profile-container');
let newMessagekey;

// observador estamos o no logueados
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // estamos logueados
    mandarUsuarioDatabase(user);
    printPost();
  } else {
    console.log('not logged in ');
  }
});

const mandarUsuarioDatabase = (user) => {
  firebase.database().ref('users').set({
    username: user.displayName,
    email: user.email,
    profPicture: user.photoURL
  });
  pintarUsuario(user);
};

const pintarUsuario = (user) => {
  let photoProfile = (user.photoURL);
  if (user.displayName !== null) {
    profileContainer.innerHTML =
    `<div class="container center">
       <div class="row">
       <p>${user.displayName}</p>
       <p> ${user.email}</p>
       <div> <img class= "circle photoProfile" src= ${photoProfile}></div>
       </div>
       </div>`;
  } else {
    profileContainer.innerHTML =
    `<div class="container center">
       <div class="row">
       <p> ${user.email}</p>
       <div> <img class= "circle photoProfile" src= ${photoProfile}></div>
       </div>
       </div>`;
  }
};

// botón de publicar para guardar información en la base de datos
publicarBtn.addEventListener('click', event => {
  let currentUser = firebase.auth().currentUser; // obtener al usuario con el propiedad .currentUser
  let messageValue = messageInput.value; // obtener el mensaje escrito 
  if (messageValue !== '') {
    newMessagekey = firebase.database().ref().child('posts').push().key; // En ref se pone la ruta para encontrar los mensajes, luego ¿dónde los vamos a guardar? obteniendo una llave única para nuestros elementos de la colección messages. creo un elemento y saco esa llavve 
    firebase.database().ref(`posts/${newMessagekey}`).set({
      creator: currentUser.uid,
      creatorName: currentUser.displayName,
      UserEmail: currentUser.email,
      text: messageValue,
      key: newMessagekey,
      countStars: 0,
      authorPic: currentUser.photoURL
    })
    // toggleStar(key);
      .then(data=>{
        document.getElementById('input-post').value = '';
      });
  }
});

// crear publicación por medio del DOM con template string
const printPost = () => {
  firebase.database().ref('posts')
    .on('child_added', (newMessage) => {
      if (newMessage.val().creatorName === undefined) {
        card.innerHTML +=
        `<div id="allCard-${newMessage.val().key}" class="card">
         <div class="container post-cont">
         <div  class ="">
         <div class="row">
            <img class="circle photoImage" src= ${newMessage.val().authorPic}>
             <p class="userPost"> <strong>${newMessage.val().UserEmail}</strong>:</p>
            <p id="card${newMessage.val().key}" class="textMessage"> ${newMessage.val().text}</p>
            </div>
            <div class ="card-action ">
            <button type= "button" onclick=editMsg(); data-key="${newMessage.val().key}" class= "edit-message-btn waves-effect waves-light btn">Editar</button>
           <button type="button" onclick=deleteMsg() data-key="${newMessage.val().key}" class="delete-message-btn delete waves-effect waves-light btn">Borrar</button>
           <p id ="count${newMessage.val().key}" class="favorite-counter right"></p><i onclick=starCounter() data-key="${newMessage.val().key}" class=" small material-icons right favoriteCounter">favorite</i>
         </div>
         </div>
        </div>`;
      } else if (newMessage.val().creatorName !== null) {
        card.innerHTML +=
        `<div id="allCard-${newMessage.val().key}" class="card">
         <div class="container post-cont">
         <div  class ="">
         <div class="row">
            <img class="circle photoImage" src= ${newMessage.val().authorPic}>
             <p class="userPost"> <strong>${newMessage.val().creatorName}</strong>:</p>
            <p id="card-${newMessage.val().key}" class="textMessage"> ${newMessage.val().text}</p>
            </div>
            <div class ="card-action ">
            <button type= "button" onclick=editMsg(); data-key="${newMessage.val().key}" class= "edit-message-btn waves-effect waves-light btn">Editar</button>
           <button type="button" onclick=deleteMsg() data-key="${newMessage.val().key}" class="delete-message-btn delete waves-effect waves-light btn">Borrar</button>
           <p id ="count${newMessage.val().key}" class="favorite-counter right"></p><i onclick=starCounter() data-key="${newMessage.val().key}" class=" small material-icons right favoriteCounter">favorite</i>
         </div>
         </div>
        </div>`;
      }
    });
};

// funcion que borra
const deleteMsg = () => {
  if (confirm('¿Quieres eliminar este mensaje?') === true) {
    let keyRelatedToPost = event.target.dataset.key;
    let allCardActualization = document.getElementById(`allCard-${keyRelatedToPost}`);     
    const deleteMsgDataBase = firebase.database().ref('posts').child(keyRelatedToPost);
    deleteMsgDataBase.remove();
    allCardActualization.innerHTML = null;
  }
};

const editMsg = () => {
  let keyRelatedToPost = event.target.dataset.key;
  const containsClass = card.classList.contains('editMode');
  const editMsgDataBase = firebase.database().ref('posts').child(keyRelatedToPost);
  let cardActualization = document.getElementById(`card-${keyRelatedToPost}`);  

  editButton = event.target;

  editMsgDataBase.once('value', (snapshot) => {
    const data = snapshot.val();
    if (containsClass) {
      editMsgDataBase.update({
        text: messageInput.value
      });
      editButton.innerHTML = 'Editar';
      card.classList.remove('editMode');
      cardActualization.innerHTML = messageInput.value;
      messageInput.value = '';
    } else {
      editButton.innerHTML = 'Guardar';
      messageInput.value = data.text ;
      card.classList.add('editMode');
    }
  });
}; 
const starCounter = () => {
  let postId = event.target.dataset.key;
  let counter;
  let starCountRef = firebase.database().ref('posts').child(postId);
  let counterFavorites = document.getElementById(`count${postId}`);
  
  starCountRef.once('value', (snapshot) =>{
    const data = snapshot.val();
    counter = data.countStars;
    starCountRef.update({
      countStars: counter + 1
    });
    counterFavorites.innerHTML = data.countStars;
  });
};

const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', event => {
  firebase.auth().signOut();
  location.href = 'index.html';
});


