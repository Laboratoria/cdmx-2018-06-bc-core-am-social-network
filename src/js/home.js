// Elementos de HTML
const dataName = document.getElementById('dataName');
const btnPost = document.getElementById('btnPost');
const postText = document.getElementById('postText');
const comentarios = document.getElementById('comentarios');
const input = document.getElementById('input');
const btnEdit = document.getElementById('btnEdit');
const btnErase = document.getElementById('btnErase');
const btnLike = document.getElementById('btnLike');
const btnSave = document.getElementById('btnSave');
const likes = document.getElementById('likes');
const btnProfile = document.getElementById('btnProfile');
const profile = document.getElementById('profile');
const home = document.getElementById('home');
const postForm = document.getElementById('postForm');
const btnHome = document.getElementById('btnHome');
const btnRanking = document.getElementById('btnRanking');
const bntMessage = document.getElementById('btnMessage');
const userPrintPhoto = document.getElementById('user-photo');
const addingPhoto = document.getElementById('photo');
var db = firebase.firestore(); // Firestore

/* Con index.js se agrega a localStorage un key mail,
el que contiene un string con un correo electrónico, la palabra facebook
o google. También se guarda el uid de cada usuario y su foto.
 */

// Se agrega a la variable user el valor de localStorage de la key mail
let user = localStorage.getItem('mail');
// Se agrega a la variable userUid el uid del usuario que inició sesión
let userUid = localStorage.getItem('userUid');
console.log(userUid);

/* Se declara la variable userPhoto, en la función bringData se hace una 
condicional que determina el método de inicio de sesión del usuario, si 
el key mail equivale a google o facebook la variable user cambia su valor
al nombre de usuario de la red utilizada, además a userPhoto se le
asigna la URL de la foto del usuario, si no la variable user
mantiene la dirección de correo electrónico */
let userPhoto;
const bringData = () => {
  if (user === 'google' || user === 'facebook') {
    user = localStorage.getItem('display');
    userPhoto = localStorage.getItem('photo');
  } else {
  }
};
bringData();

dataName.innerHTML = user;

// Función para subir mensaje a firestore
btnPost.addEventListener('click', el => {
  // Se obtiene el valor del input
  let posted = postText.value;
  // Si el input está vacío se alerta al usuario
  if (posted === '' || posted === ' ') {
    alert('Escribe un mensaje');
  } else {
    db.collection('posted').add({
      user: userUid, // ID del usuario logeado
      name: user, // Nombre del usuario
      post: posted, // Texto del post
      like: 0 // Número de likes
    })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        postText.value = '';
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  }
});

// Se obtienen mensajes de firestore
db.collection('posted').onSnapshot((querySnapshot) => {
  comentarios.innerHTML = '';
  querySnapshot.forEach((doc) => {
    let postID = doc.id; // ID del post
    let postName = doc.data().name; // Nombre del usuario
    let text = doc.data().post; // Texto del post
    let userId = doc.data().user; // ID del usuario logeado
    printPost(postID, postName, text, userId);
  });
});

// Función para imprimir
/* Se pasan como parámetros el ID del post, nombre del usuario, texto
y ID del usuario. Se declara una condicional que compara si el ID del usuario
logeado coincide con el ID del usuario del post publicado, si son iguales 
se imprime una caja con el nombre del usuario, el post, el botón de like, 
botón para editar y botón para borrar. Si no es el mismo se imprime caja con 
nombre de usuario, texto y botón de like.
Se utiliza onclick para accionar los botones, se pasa como parámetro el ID del post   
*/
const printPost = (postID, postName, text, userId) => {
  if (userUid === userId) {
    comentarios.innerHTML += `<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey lighten-5">
            <div class="card-content black-text">
              <span class="card-title pink-text">${postName}</span>
              <p>${text}</p>
            </div>
            <div class="card-action">
                    <button class="btn-flat pink-text" onclick="likePost('${postID}')">
                            <i class="large material-icons">favorite</i>
                    </button>
                    <button class="btn-flat" onclick="editPost('${postID}')">
                            <i class="large material-icons">mode_edit</i>
                    </button>
                    <button class="btn-flat" onclick="deletePost('${postID}','${postName}', '${text}', '${userId}')">
                            <i class="large material-icons">delete</i>
                    </button>
            </div>
          </div>
        </div>
      </div>`;
  } else {
    comentarios.innerHTML += `<div class="row">
        <div class="col s12 m6">
          <div class="card white">
            <div class="card-content black-text">
              <span class="card-title pink-text">${postName}</span>
              <p>${text}</p>
            </div>
            <div class="card-action">
                    <button class="btn-flat pink-text" onclick="likePost('${postID}')">
                            <i class="large material-icons">favorite</i>
                    </button>
            </div>
          </div>
        </div>
      </div>`;
  }
};

// Función para borrar post
// Se selecciona el nombre del objeto y el ID del post
const deletePost = (postID) => {
  db.collection('posted').doc(postID).delete().then(function() {
    console.log('Post borrado');
  }).catch(function(error) {
    console.error('Error: ', error);
  });
};

// Función para editar post
/* Se pasan como parametros el ID del post, el nombre de usuario, 
el texto y el ID del usuario. Al momento de presionar el botón
activa un prompt donde se escriben los cambios, se guardan en la 
variable newPost y se actualiza el objeto*/
const editPost = (postID, postName, text, userId) => {
  let newPost = prompt('Escribe tus cambios');
  let postRef = db.collection('posted').doc(postID);

  return postRef.update({
    user: userUid,
    name: user,
    post: newPost
  })
    .then(function() {
      console.log('Document successfully updated!');
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};

// Botón de Perfil 
btnProfile.addEventListener('click', el => {
  // Se asigna ruta para ir a html perfil
  window.location.href = '../views/perfil.html';
  addingPhoto.innerHTML = `<img id="user-photo" src="${userPhoto}" class="col s5 m4 l2 offset-3 circle foto-perfil" alt="">`;
});

// Botón de Home
btnHome.addEventListener('click', el => {
  // Se asigna ruta para ir a html home
  window.location.href = '../views/home.html';
});

// Botón de Mensaje
bntMessage.addEventListener('click', el => {
  // Se asigna ruta para ir a html mensaje
  window.location.href = '../views/mensaje.html';
});
