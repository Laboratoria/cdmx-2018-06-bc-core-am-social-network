let DB = initiaziling();
// Variables referidad a espacios del DOM y variables globales
let likes = 0;
let dislikes = 0;
let commentSend = document.getElementById('send-comment');
// Funcion de crud para limpiar las entradas
const cleanRegister = () =>{
  document.getElementById('comment-text').value = '';
};
// Funciones CRUD Create post
const createMessageinUserProfile = (user) =>{
  let userRef = user;
  console.log(user.displayName);
  // Traer elementos del DOM
  let userPost = document.getElementById('comment-text').value;
  // const timestamp = firebase.firestore.FieldValue.serverTimestamp().ref.update({ updatedAt: new Date() });
  DB.collection('diabeTipsUsersPost').add({
    userPost: userPost,
    userName: user.displayName,
    userId: user.uid,
  })
    .then(function(docRef) {
      console.log('Registro de post de usuario bajo ID: ', docRef.id);
      // Limpiar los espacios del formulario para un nuevo registro
      alert('Tu post esta completo :D');
    		cleanRegister();
    })
    .catch(function(error) {
      console.error('Error: No se concreto la publicacion', error);
    });
};// coments to merge
// Read and Show post
const printPost = () => {
  const userPostConteiner = document.getElementById('comments');
  DB.collection('diabeTipsUsersPost').onSnapshot((querySnapshot) => { // onStapshot va a vigilar cuando haga cambios y si hay un cambio entra y te dice que fue lo que cambió
    userPostConteiner.innerHTML = '';
    querySnapshot.forEach((doc) => {
      userPostConteiner.innerHTML +=
                               `
                               <div class="form-control">
                                <p>${doc.data().userName}  dice: </p>
                                <p>${doc.data().userPost}</p>
                                <a class = "btn" onclick = "deletePost('${doc.id}')"><i class="far fa-trash-alt"></i></a>
                                <a class = "btn" onclick = "editPost('${doc.id}', '${doc.data().userPost}')"><i class="far fa-edit"></i></a>
                                 <i class ="likes" onclick="addLike()" class="fa fa-heart" aria-hidden="true"></i>
                                 <i class ="dislikes" onclick="restLike()" class="fal fa-heartbeat" aria-hidden="true"></i>
                                 </div>`;
    });
  });
};
const deletePost = (idProfile) =>{
  DB.collection('diabeTipsUsersPost').doc(idProfile).delete().then(function() {
    console.log('Post successfully deleted!');
  }).catch(function(error) {
    console.error('Error removing post: ', error);
  });
};
const editPost = (idProfile, userPost) =>{
  document.getElementById('comment-text').value = userPost;
  let btn = document.getElementById('send-comment');
  btn.innerHTML = 'Editar';
  // Evento del boton
  btn.onclick = () =>{
    var deleteDBRef = DB.collection('diabeTipsUsersPost').doc(idProfile);
    let userPost = document.getElementById('comment-text').value;
    return deleteDBRef.update({
      userPost: userPost
    })
      .then(function() {
        console.log('Post successfully updated!');
        btn.innerHTML = 'Compartir';
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error('Error updating post: ', error);
      });
  };
};
// Contador de likes
let countLikes = 0;
const addLike = () => { // Cuando sucede una llamada al evento del boton like, se acumula un punto que se mostrara al lado //
  countLikes = countLikes + 1;
  document.getElementById('likeCounter').textContent = countLikes;
};

commentSend.addEventListener('click', (event) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      createMessageinUserProfile(user);
      printPost();
    } else {
      alert('No, no, no ... No te has iniciado sesion');
    }
  });
});
// // __ Function Share Comment:
// let comments = []; // Where the array is gonna live
//
// function share() {
//   comments.push(input.value);
//   printComments(comments);
//   input.value = ''; // The string is empty because it fills when the user send the comment
// }
//
// function printComments(comments) {
//   output.innerHTML = ''; // It's empty until the function fills it.
//   comments.forEach(function(value) {
//     node = document.createElement('p'); // We create a dinamic paragraph
//     text = document.createTextNode(value);
//     node.appendChild(text);
//     output.appendChild(node);
//   });
// };
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
