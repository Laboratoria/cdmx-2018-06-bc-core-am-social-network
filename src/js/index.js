let register = document.getElementById('register');
let enter = document.getElementById('enter');

const wintowTras = () =>{
  window.open('../src/views/view1.html','_self');
}
// Evento donde se registran los usuarios código de firebase
register.addEventListener('click', event => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (email != '' && password != '') {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
});
// Evento de iniciar sesion
enter.addEventListener('click', event => {
  let enterEmail = document.getElementById('enter-email').value;
  let enterPassword = document.getElementById('enter-password').value;
  if (enterEmail != '' && enterPassword != '') {
    firebase.auth().signInWithEmailAndPassword(enterEmail, enterPassword)
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
 });
// funsión para ver si un usuario esta activo o no
const monitor = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      wintowTras();
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}; 
monitor();