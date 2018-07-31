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
  console.log((photoProfile));
  profileContainer.innerHTML =
    `<div class="container center">
       <div class="row">
       <p>${user.displayName}</p>
       <p> ${user.email}</p>
       <div> <img class= "circle photoProfile" src= ${photoProfile}></div>
       </div>
       </div>`;
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
      card.innerHTML +=
        `<div class="card">
         <div class="container post-cont">
         <div  class ="">
         <div class="row">
            <img class="circle photoImage" src= ${newMessage.val().authorPic}>
             <p class="userPost"> <strong>${newMessage.val().creatorName}</strong>:</p>
            <p class="textMessage"> ${newMessage.val().text}</p>
            </div>
            <div class ="card-action ">
            <button type= "button" onclick=editMsg(); data-key="${newMessage.val().key}" class= "edit-message-btn waves-effect waves-light btn">Editar</button>
           <button type="button" onclick=deleteMsg() data-key="${newMessage.val().key}" class="delete-message-btn delete waves-effect waves-light btn">Borrar</button>
         <i onclick=toggleStar() class=" small material-icons right favoriteCounter">favorite</i>  
         </div>
         </div>
        </div>`;
    });
};

// funcion que borra
const deleteMsg = () => {
  if (confirm('¿Quieres eliminar este mensaje?') === true) {
    let keyRelatedToPost = event.target.dataset.key;
    console.log(event.target.dataset.key);
    const deleteMsgDataBase = firebase.database().ref('posts').child(keyRelatedToPost);
    deleteMsgDataBase.remove();
  }
};

const editMsg = () => {
  let keyRelatedToPost = event.target.dataset.key;
  console.log(keyRelatedToPost);
  const containsClass = card.classList.contains('editMode');
  const editMsgDataBase = firebase.database().ref('posts').child(keyRelatedToPost);
  editButton = event.target;

  editMsgDataBase.once('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (containsClass) {
      editMsgDataBase.update({
        text: messageInput.value
      });
      // console.log(contenidoTask);
      editButton.innerHTML = 'Editar';
      card.classList.remove('editMode');
      messageInput.value = '';
    } else {
      editButton.innerHTML = 'Guardar';
      messageInput.value = data.text ;
      card.classList.add('editMode');
    } 
  });
};


const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', event => {
  firebase.auth().signOut();
  location.href = 'index.html';
});

// const toggleStar = (uid) => {
//   console.log(uid);
// postRef.transaction(function(post) {
//   if (post) {
//     if (post.stars && post.stars[uid]) {
//       post.starCount--;
//       post.stars[uid] = null;
//     } else {
//       post.starCount++;
//       if (!post.stars) {
//         post.stars = {};
//       }
//       post.stars[uid] = true;
//     }
//   }
//   return post;
// });
// favoriteCounter.addEventListener('click', toggleStar