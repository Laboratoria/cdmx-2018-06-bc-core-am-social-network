var config = {
  apiKey: "AIzaSyCgMJoPu-MKQgVZpkMTYo6a6CVTrPpllQ0",
  authDomain: "red-social-f407d.firebaseapp.com",
  databaseURL: "https://red-social-f407d.firebaseio.com",
  projectId: "red-social-f407d",
  storageBucket: "red-social-f407d.appspot.com",
  messagingSenderId: "862806390134"
};
firebase.initializeApp(config);


function registrar() {
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("password").value;

  //sie el usuario se regsitro de manera correcta se ejecutara la funcion verificar
  firebase.auth().createUserWithEmailAndPassword(email, contraseña)
    .then(function () {
      verificar()
    })
    .catch(function (error) {
      // Handle Errors here.

      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}




function ingresar() {
  let emailIngreso = document.getElementById("emailIngresar").value;
  let passwordIngreso = document.getElementById("passwordIngresar").value;
  firebase.auth().signInWithEmailAndPassword(emailIngreso, passwordIngreso)
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });

}
//verificar si existe un usuario y darle acceso
function observador() {
  //cuando  el usuario esta registrado
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("existe usuario registrado");
      // User is signed in.

      aparece();
      var displayName = user.displayName;
      var email = user.email;
      //cuando el usuario ya confirmo correo
      console.log(user.emailVerified);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // si no existe un usuario

    } else {
      // User is signed out.
      console.log("no existe usuario registrado");
      // ...
    }
  });
}
observador();
//contenido que slo se mostrara al estar registrado
function aparece() {
  let contenido = document.getElementById("contenido");
  contenido.innerHTML = `
  
  <h4>BIENVENIDO</h4>
  
  <button onclick = "cerrar()">cerrar sesión</button>
  
  `;
};

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      console.log("Saliendo...")
    })
    .catch(function (error) {
      console.log(eror)
    })
};
//verificar el correo electronico con el que se registra
function verificar() {
  //enviara correo para verificar
  var user = firebase.auth().currentUser;
  //usuario a quien se le mandara correo
  user.sendEmailVerification()
    .then(function () {
      //si funciona se mandara correo
      // Email sent.
      console.log("Enviando correo..");
    }).catch(function (error) {
      // An error happened.
      console.log("error");
    });
}