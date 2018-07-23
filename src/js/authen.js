// Accedo al serviciode autentifacion
// let authen = firebase.auth();

// let enter = document.getElementById('enter');

// buton.addEventListener('click', event => {
//     let user = new firebase.auth.GoogleAuthProvider();
//     authen.signInWithPopup(user);
// })
let loginGoogle = document.getElementById('google-user');

let provider = new firebase.auth.GoogleAuthProvider();

loginGoogle.addEventListener('click', event => {  
  firebase.auth()
  .signInWithPopup(provider)
  .then(result => {
  })
}); 

let loginFacebook = document.getElementById('facebook-user');
let providerFacebook = new firebase.auth.FacebookAuthProvider();

loginFacebook.addEventListener('click', event => {
  // firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
  //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //   var token = result.credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  // });
  console.log('mndo');
});