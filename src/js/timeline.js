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
let messagePost = document.getElementById('messagePost');
let btnPost = document.getElementById('btnPost');
let chatUl = document.getElementById('chat');
let btnLogOut = document.getElementById('btnLogout'); 

btnPost.addEventListener('click', function() {
  let nombre = namePost.value;
  let mensaje = messagePost.value;
        
  firebase.database().ref('posts').push({
    name: nombre,
    message: mensaje,
  });
});

btnLogOut.addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
    window.location.href = '../index.html';
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
});

firebase.database().ref('posts').on('value', snapshot => { // objeto que contiene la data
  let html = '';  
  snapshot.forEach(function(elemento) {
    let element = elemento.val();
    let nombre = element.name;
    let mensaje = element.message;  
    html += `<div class="card">
              <li><strong>${nombre}</strong> ${mensaje}</li>
            </div>`;
  });
  chatUl.innerHTML = html;
});