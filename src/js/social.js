window.onload = initialization;
let formSignup;
let refUsers;

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

  formSignup = document.getElementById('form-signup');
  formSignup.addEventListener('submit', sendSignup, false);
  refUsers = firebase.database().ref().child('users'); // Se hace referencia a la rama de la bd en la que almacenaremos la info
}

function sendSignup(event) { // Llamamos
  event.preventDefault();
  refUsers.push({
    ciudad: event.target.ciudad.value,
    correo: event.target.correo.value,
    edad: event.target.edad.value,
    nombre: event.target.nombre.value,
    pais: event.target.pais.value,
    password: event.target.password.value,
  });
  alert(event.target.nombre.value + ' Quedaste Registradx');
}

// function writeUserData(userId, name, email) {
//   firebase.database().ref('users/' + userId).set({
//     username: 'esme',
//     email: 'esme.riveroh@gmail.com',
//   });
//   alert('hola desde la escritura del usuario');
// };

