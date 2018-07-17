function registrar() {
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;
  if (email === "") {
    alert("No has ingresado un email")
  } else if (contraseña === "") {
    alert("No has ingresado una contraseña")
  }
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
  let email2 = document.getElementById("email2").value;
  let contraseña2 = document.getElementById("contraseña2").value;

  firebase.auth().signInWithEmailAndPassword(email2, contraseña2)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}

function observador() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("usuario activo")
      aparece(user);
      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      console.log(user);
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no existe usuario");
      // ...
    }
  });

}

observador();

function aparece(user) {
  let user = user;
  let contenido = document.getElementById("contenido");
  if (user.emailVerified) {
    contenido.innerHTML = `
    <p>Bienvenido</p>

    <button onclick="cerrar()">Cerrar sesión</button> 
    `;
  }

}

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      console.log("Saliendo...")
    })
    .catch(function (error) {
      console.log(error)
    })
}

function verificar() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    console.log("enviando correo");
    // Email sent.
  }).catch(function (error) {
    console.log(error);
    // An error happened.
  });
}
