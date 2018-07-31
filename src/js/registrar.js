firedatos.initializeFirebase();
// funcion de registrar
registrar.addEventListener('click', event => {
  console.log('diste un click');
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;
  const usuario = document.getElementById('nombre').value;
  const auth = firebase.auth();
  auth.createUserWithEmailAndPassword(email, contrasena)
    .then(() => {
      console.log('Holi');
      verificar();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert('Este correo electronico ya esta registrado');
      console.log(errorMessage);
    });
});
// observa al usuario
const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('Existe usuario');
      // existe usuario
      const displayName = user.displayName;
      const email = user.email;
      console.log('*********');
      console.log(user.emailVerified);
      console.log('*********');
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;

    } else {
      // no existe usuario
      console.log('No existe usuario');
    }
  });
};
observador();
// verifica y envia correo
const verificar = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification()
    .then(() => {
      console.log('Enviando correo..');
      alert('Enviando correo de verificación');
      location.href = '../views/app.html';
    })
    .catch(error => {
      console.log(error);
    });
};
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
  window.location.assign('../views/app.html');
};