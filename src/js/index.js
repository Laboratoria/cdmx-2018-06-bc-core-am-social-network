let register = document.getElementById('register');
let enter = document.getElementById('enter');
// Evento donde se registran los usuarios código de firebase
register.addEventListener('click', event => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
     if (email != null) {
      window.open('../src/views/view1.html','_self');
     }
});
// Evento de iniciar sesion
enter.addEventListener('click', event => {
    let enterEmail = document.getElementById('enter-email').value;
    let enterPassword = document.getElementById('enter-password').value;
    firebase.auth().signInWithEmailAndPassword(enterEmail, enterPassword)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
 });
// funsión para ver si un usuario esta activo o no
 const monitor = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          window.open('../src/views/view1.html','_self');
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