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
  const editMsgDataBase = firebase.database().ref('posts').child(keyRelatedToPost);
  card.classList = 'editMode';
  console.log(card);

  // const refPostToEdit = firebase.database().ref().child('posts').child(keyRelatedToPost);
  // refPostToEdit.once('value', (snapshot) => {
  //   const data = snapshot.val();
  //   if (containsClass) {
  //     console.log(containsClass);
  //     refTaskToEdit.update({
  //       contenidoTask: messageInput
  //     });
  //     console.log(contenidoTask);
  //     editButton.innerHTML = 'Edit ';
  //     card.classList.remove('editMode');
  //     messageInput.value = '';
  //   } else {
  //     // const data = snapshot.val();
  //     console.log(containsClass, card);
  //     editButton.innerHTML = 'Save';
  //     messageInput.value = data.messageInput.value;
  //     card.classList.add('editMode');
  //   };
  // });
};


const toggleStar = (uid) => {
  console.log(uid);
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
};
// favoriteCounter.addEventListener('click', toggleStar);

const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', event => {
  firebase.auth().signOut();
  location.href = 'index.html';
});


// Agreagar el boton de editar desde javascript
let editIconUI = document.createElement('span');
editIconUI.class = 'edit-message';
editIconUI.innerHTML = ' ✎';
editIconUI.setAttribute('userid', key);
// Crear un editIconUI span element, después darale un evento click con una función callback editButtonClicked().
editIconUI.addEventListener('click', editButtonClicked);
// Append despues li.innerHTML = value.name
$li.append(editIconUI);

// Mostrar el mensaje modificado de usuario
document.getElementById('edit-user-module').style.display = 'block';

// Crea el path donde se selecciona la información del usuario por la id de database
const userRef = dbRef.child('users/' + e.target.getAttribute('userid'));
// Remplaza la información que ingreso el usuario
const editUserInputsUI = document.querySelectorAll('.edit-user-input');

// Se define un evento llamado value en la función llada userRef, el segundo argumentoen ese evento es una función call back 
// con el parametro snap el cual tendrá la información del usuario actual
userRef.on('value', snap => {
  for (var i = 0, len = editUserInputsUI.length; i < len; i++) {
    var key = editUserInputsUI[i].getAttribute('data-key');
    editUserInputsUI[i].value = snap.val()[key];
  }
});
// Dentro de ese evento callback, recorrera ese arrayy obtendra el valor de un atributo data-keyen cada iteración y lo guardara´
// en un variable key para poder asignarle un  valor de snap.value()[key] al campo de mensaje.

// guardar los datos modificados del mensaje por usuario
const saveBtn = document.querySelector('#edit-message-btn');
saveBtn.addEventListener('click', saveUserBtnClicked);

const messageID = document.querySelector('.edit-messageid').value;
// se crea una let vacia para almacenar lo que introduzca el usuario
let editedmessageObject = {};
// obtener todo lo que ingreso el usuario en un array
const editMessageInputsUI = document.querySelectorAll('.edit-message-input');
// creamos un uevo loop para que iterar en el nuevo array creado y obtener los nuevos valores con el atributo data-key
// guardar los valores en una let key
editMessageInputsUI.forEach(function(textField) {
  let key = textField.getAttribute('data-key');
  let value = textField.value;
  editedMessageObject[textField.getAttribute('data-key')] = textField.value;
});
// Despues usamos el método update para actualizar la información que cambio en el comenario
userRef.update('editMessage', function() {
  console.log('Message has been updated');
});
