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
let btnLogOut = document.getElementById('btnLogout');
let userEmail = document.getElementById('welcome');
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
  let html ='';  
  snapshot.forEach(function(event) {
    let element = event.val();
    let nombre = element.name;
    let mensaje = element.message;  
    html += `<div class="card">
              <li><strong>${nombre}</strong> ${mensaje}</li>
            </div>`;
  });
  chatUl.innerHTML = html;
  infoUser();
});
function infoUser() {
  var user = firebase.auth().currentUser;
  var email; // name,, photoUrl, uid, emailVerified; 
  email = user.email;
  userEmail.innerHTML = `<h1><center>Bienvenidx</center></h1>
                          <h2><center>${email}</center></h2>`;
  // if (user !== null) {
  //   console.log(user.displayName);
    
  //   name = user.displayName;
  //   email = user.email;
  //   photoUrl = user.photoURL;
  //   emailVerified = user.emailVerified;
  //   uid = user.uid;
  // }
}
