firedatos.initializeFirebase();
const auth = firebase.auth();

// Funcion para ingreso de usuario
enviar.addEventListener('click', event => {
  console.log('Diste click al boton de Ingreso');
  const email2 = document.getElementById('email2').value;
  const contrasena2 = document.getElementById('contrasena2').value;
  auth.signInWithEmailAndPassword(email2, contrasena2)
    .then(() => {
      console.log('Holi');
      newDoc();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('E-mail incorrecto');
      alert('Contraseña incorrecto');
    });
});

// funcion de ingreso con google
document.getElementById('google').addEventListener('click', event => {
  console.log('Diste un click');
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) {
      newDoc();
    });
});

// funcion de ingreso con facebook
document.getElementById('facebook').addEventListener('click', event => {
  console.log('Diste un click');
  const provider = new firebase.auth.FacebookAuthProvider();
  console.log('Diste un click2');
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) {
      newDoc();
    });
});

newDoc = () => {
  window.location.assign('../src/views/app.html');
}