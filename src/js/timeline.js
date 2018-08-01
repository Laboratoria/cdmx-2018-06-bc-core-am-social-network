const config = {
  apiKey: 'AIzaSyCjN9x4Q4B8Nx5xf1ZoKLpWn4mTPiuuC3c',
  authDomain: 'red-social-19985.firebaseapp.com',
  databaseURL: 'https://red-social-19985.firebaseio.com',
  projectId: 'red-social-19985',
  storageBucket: 'red-social-19985.appspot.com',
  messagingSenderId: '169924096887'
};

firebase.initializeApp(config);
const database = firebase.database();
let namePost = document.getElementById('namePost');
let messagePost = document.getElementById('messagePost')
let btnPost = document.getElementById('btnPost');
let chatUl = document.getElementById('chat');
let userEmail = document.getElementById('welcome');
let btnLogOut = document.getElementById('btnLogout'); 
let keyPost;

btnPost.addEventListener('click', function() {
  let user = firebase.auth().currentUser;
  let email;
  let mensaje = messagePost.value;
  email = user.email;
  firebase.database().ref('posts').push();
  let postNew = firebase.database().ref('posts').push();
  keyPost = postNew.getKey();
  firebase.database().ref(`posts/${keyPost}`).set({
    name: email,
    message: mensaje,
    keyPost: keyPost
  });
});

btnLogOut.addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
    window.location.href = '../index.html';
  }).catch(function(error) {
    console.log(error);
  });
});

firebase.database().ref('posts').on('value', snapshot => { // objeto que contiene la data
  var user = firebase.auth().currentUser;
  var email;
  email = user.email;
  userEmail.innerHTML = `<h1><center>Bienvenidx</center></h1>
                          <h2><center>${email}</center></h2>`;
  let html = ''; 
  let key = 0;
  snapshot.forEach(function(e) {
    let element = e.val();
    let nombre = element.name;
    let mensaje = element.message; 
    html += `
     <li> <b> ${nombre}</b>: ${mensaje}
     <p id="${e.val().keyPost}"> ${e.val().keyPost}</p>
     <button type="button" class="btnDelete borrar" data-message= "'${key}'">
     <span><svg-icon><src href="sprite.svg#si-glyph-circle-remove" /></svg-icon></span>
     </button>
     </li>
      `;
    key++;
  });

  chatUl.innerHTML = html;
  if (chatUl !== '') {
    let deleteElements = document.getElementsByClassName('borrar');
    for (let i = 0; i < deleteElements.length; i++) {
      deleteElements[i].addEventListener('click', deleteMessage, false);
    }
  }
});

function infoUser() {
  var user = firebase.auth().currentUser;
  var email;
  email = user.email;
  userEmail.innerHTML = `<h1><center>Bienvenidx</center></h1>
              <h2><center>${email}</center></h2>`;
}
function deleteMessage() {
  let ref = firebase.database().ref('posts');
  let idPost = this.parentNode.childNodes[3].id;
  ref.child(idPost).remove(); 
}