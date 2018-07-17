let register = document.getElementById('register');
let enter = document.getElementById('enter');

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
});

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