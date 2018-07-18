// Autentificación con email
const userN = document.getElementById('nameU').value;
const userE = document.getElementById('emailU').value;
const userP = document.getElementById('pswU').value;
const registerEmail = document.getElementById('registerButton');

registerEmail.addEventListener('click', (event) =>{
  sigInByEmail(userEmail,userPsw);
});

authentificationsUsersByEmail= () =>{
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPsw).catch(function(error) {
  // Manejo de errores
  var errorCode = error.code;
  var errorMessage = error.message;
});
}
sigInByEmail = (userEmail, userPsw) => {
  firebase.auth().signInWithEmailAndPassword(userEmail, userPsw).catch(function(error) {
  // Manejo de error
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
}
