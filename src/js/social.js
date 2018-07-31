window.onload = initialization;
let formSignup;
let refUsers;
let refUserAuth;
function initialization() {
  const config = {
    apiKey: 'AIzaSyCjN9x4Q4B8Nx5xf1ZoKLpWn4mTPiuuC3c',
    authDomain: 'red-social-19985.firebaseapp.com',
    databaseURL: 'https://red-social-19985.firebaseio.com',
    projectId: 'red-social-19985',
    storageBucket: 'red-social-19985.appspot.com',
    messagingSenderId: '169924096887'
  };
  firebase.initializeApp(config);
  formSignup = document.getElementById('form-signup'); // Hace referencia al formulario
  formSignup.addEventListener('submit', sendSignup, false); // Se crea el evento del boton submit del formulario
  refUsers = firebase.database().ref().child('users'); // Se hace referencia a la rama de la bd en la que almacenaremos la info
  refUserAuth = firebase.auth();
}
function sendSignup(event) { // En esta función se agrega los datos del formulario en la bd
  event.preventDefault();
  refUsers.push({
    ciudad: event.target.ciudad.value,
    correo: event.target.correo.value,
    edad: event.target.edad.value,
    nombre: event.target.nombre.value,
    pais: event.target.pais.value,
    password: event.target.password.value,
  });
  refUserAuth.createUserWithEmailAndPassword(event.target.correo.value, event.target.password.value) // Metodo para inicial sesión
    .then(function() {
      alert(event.target.nombre.value + ' quedaste registradx');
      goTimeline();
    })
    .catch(function(error) {
      alert('Confirma que hayas escrito tus datos correctamente!');
      // Manejo de error
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}
function goTimeline(event) {
  window.location.href = '../views/timeline.html';
}