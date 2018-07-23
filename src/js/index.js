var config = {
  apiKey: "AIzaSyCU1xkVag73YWUERya-On5x4VaBBXzXxgo",
  authDomain: "red-social-237f9.firebaseapp.com",
  databaseURL: "https://red-social-237f9.firebaseio.com",
  projectId: "red-social-237f9",
  storageBucket: "red-social-237f9.appspot.com",
  messagingSenderId: "839140955395"
};


firebase.initializeApp(config);


registrar.addEventListener('click', function(){
  console.log('diste un click');
  let email = document.getElementById('email').value;
  let contrasena = document.getElementById('contrasena').value;
  firebase.auth()
       .createUserWithEmailAndPassword(email, contrasena)
       .then(function () {
       verificar()
    })
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      // console.log(errorCode);
      // console.log(errorMessage);


    });

});

function ingreso() {
  let email2 = document.getElementById('email2').value;
  let contrasena2 = document.getElementById('contrasena2').value;
  firebase.auth()
          .signInWithEmailAndPassword(email2, contrasena2)
          .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    // console.log(errorCode);
    // console.log(errorMessage);


  });

}
function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log('Existe usuario activo');
      aparece(user);
      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      // console.log('*********************');
      // console.log(user.emailVerified);
      // console.log('*********************');

      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
      console.log('no existe usuario activo');

    }
  });
}
observador();
function aparece(user) {
  let userr = user;
  let contenido = document.getElementById('contenido2');
  if (user.emailVerified) {
    contenido.innerHTML = `
        <p>Bienvenido</p>`;
  }

}
function verificar() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    console.log('Enviando correo...');

  }).catch(function (error) {
    // An error happened.
    console.log(error);

  });
}
/*
const googlelogin = document.getElementById('google');
const provider = new firebase.auth.GoogleAuthProvider();

 googlelogin.addEventListener('click', event => {
   console.log(hola)
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {

});
});*/
function google() {
  console.log('Diste un click')
  var provider = new firebase.auth.GoogleAuthProvider();

  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    newDoc();
});
}
function facebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    newDoc();
  });
}

function newDoc() {
  window.location.assign("app.html")
}