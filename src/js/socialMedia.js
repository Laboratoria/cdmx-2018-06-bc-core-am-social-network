const loginFacebook = () => {
  var providerFacebook = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    // window.location.replace('views/wall.html');
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};
let facebookAu = document.getElementById('logFacebook');
facebookAu.addEventListener('click', r => {
  loginFacebook();
  window.location.replace('views/wall.html');
});
// /aqui ya sale google

var providerGoogle = new firebase.auth.GoogleAuthProvider();

const loginGoogle = () => {
  firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    // window.location.replace('views/wall.html');
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};
let googleAu = document.getElementById('logGoogle');
googleAu.addEventListener('click', e => {
  loginGoogle();
});
