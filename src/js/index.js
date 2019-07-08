// Para ingreso con correo y contraseña

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCwZtKNwCJJTU-oRr5j2LL921ZbKPP6ovQ',
  authDomain: 'social-network-laboratoria.firebaseapp.com',
  databaseURL: 'https://social-network-laboratoria.firebaseio.com',
  projectId: 'social-network-laboratoria',
  storageBucket: 'social-network-laboratoria.appspot.com',
  messagingSenderId: '67671745906'
};
firebase.initializeApp(config);

const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signup = document.getElementById('signup');

// Agregar evento para el botón de inicio de sesión
login.addEventListener('click', event => {
  event.preventDefault();
  // Obtenemos valor de email y password
  const emailValue = email.value;
  const passwordValue = password.value;
  const auth = firebase.auth();
  // Para iniciar sesión 
  const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
  promise.catch(event => console.log(event.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => { // cuando detecta que el usuario se ha "logeado"
  if (firebaseUser) {
    location.href = 'views/muro.html';
  } else {
    console.log('not logged in');
  }
});

// Para ingresar con google

const loginGoogle = document.getElementById('login-google');
const provider = new firebase.auth.GoogleAuthProvider();

loginGoogle.addEventListener('click', event => {
  event.preventDefault();
  firebase.auth()
    .signInWithPopup(provider) // popUp te va a dar la ventana de acceso a tu cuenta de google. Parámetro de la variable provider que tiene la autenticación con google.

    .then(function(provider) { // entonces ejecuta la función que es el resultado (acceder con google)
      location.href = 'views/muro.html';
    });
});

// Para ingresar con facebook

const loginFacebook = document.getElementById('login-facebook');
const provFace = new firebase.auth.FacebookAuthProvider();

loginFacebook.addEventListener('click', event => {
  event.preventDefault();
  firebase.auth()
    .signInWithPopup(provFace) // popUp te va a dar la ventana de acceso a tu cuenta de facebook. Parámetro de la variable provFace que tiene la autenticación con facebook.

    .then(function(provFace) { // entonces ejecuta la función que es el resultado (acceder con Facebook)
      location.href = 'views/muro.html';
    });
});
