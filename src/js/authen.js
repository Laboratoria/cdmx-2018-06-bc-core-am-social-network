// Accedo al serviciode autentifacion
// let authen = firebase.auth();

// let enter = document.getElementById('enter');

// buton.addEventListener('click', event => {
//     let user = new firebase.auth.GoogleAuthProvider();
//     authen.signInWithPopup(user);
// })
let loginGoogle = document.getElementById('google-user');

loginGoogle.addEventListener('click', event => {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth()
  .signInWithPopup(provider)
  .then(result => {
  })
});    