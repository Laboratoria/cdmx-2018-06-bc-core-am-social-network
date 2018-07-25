window.initializeFirebase = () => {
  firebase.initializeApp({ 
    apiKey: 'AIzaSyCgMJoPu-MKQgVZpkMTYo6a6CVTrPpllQ0',
    authDomain: 'red-social-f407d.firebaseapp.com',
    databaseURL: 'https://red-social-f407d.firebaseio.com',
    projectId: 'red-social-f407d',
    storageBucket: 'red-social-f407d.appspot.com',
    messagingSenderId: '862806390134'
  });
};

document.getElementById('btn-registrar').addEventListener('click', event => {
  event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  registrar(email, password);
  console.log('diste un click');
});

const registrar = (email, password) => {
// si el usuario se regsitro de manera correcta se ejecutara la funcion verificar
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      verificar();
      alert('Se te ha enviado un correo para verificar tu cuenta');
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      if (errorCode === 'auth/invalid-email') {
        alert('Ingresa un correo electrónico válido');
      } else if (errorCode === 'auth/weak-password') {  
        alert('Ingresa una contraseña válida, mínimo 6 caracteres');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('Usuario ya registrado, favor de verificar datos');
      }
    });
};

document.getElementById('btn-ingresar').addEventListener('click', event => {
  event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  ingresar(email, password);
  console.log('diste un click');
});

const ingresar = () => {
  let email = document.getElementById('email-ingresar').value;
  let password = document.getElementById('password-ingresar').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(event => {
      location.href = ('../views/home.html');
    })
    .catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      if (errorCode === 'auth/wrong-password') {
        alert('Por favor, verifica tu contraseña.'); 
      } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email' || errorCode === 'auth/argument-error') {
        alert('Verifica tu usuario');
      }
    });
};

// verificar si existe un usuario y darle acceso
const observador = () => {
  // cuando  el usuario esta registrado

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // console.log("existe usuario registrado");
      // User is signed in.

      aparece();
      let displayName = user.displayName;
      let email = user.email;
      let userPhoto = user.photoURL;
      // cuando el usuario ya confirmo correo
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      let password = user.password;
      // si no existe un usuario
    } else {
      // User is signed out.
      console.log('no existe usuario registrado');
      // ...
    }
  });
};
observador();
// contenido que slo se mostrara al estar registrado
const aparece = () => {
  let contenido = document.getElementById('contenido');
  contenido.innerHTML = `
  
  <h1>BIENVENIDO</h1>
  
  `;
};


// verificar el correo electronico con el que se registra
const verificar = () => {
  // enviara correo para verificar
  var user = firebase.auth().currentUser;
  // usuario a quien se le mandara correo
  user.sendEmailVerification()
    .then(result => {
      // si funciona se mandara correo
      // Email sent.
      console.log('Enviando correo..');
    }).catch(error => {
      // An error happened.
      console.log('error');
    });
};

