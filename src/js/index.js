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

newDoc = () => {
  window.location.assign('views/app.html');
}