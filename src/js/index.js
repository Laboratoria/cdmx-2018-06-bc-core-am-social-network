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
  // console.log('hola');
  // Obtenemos valor de email y password
  const emailValue = email.value;
  const passwordValue = password.value;
  const auth = firebase.auth();
  // Para iniciar sesión 
  const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
  promise.catch(event => console.log(event.message));
  location.href = 'views/muro.html';
});

// Añadiendo el evento del botón de registrarse

signup.addEventListener('click', event => {
  event.preventDefault();
  const signupEmailValue = signupEmail.value;
  const signupPasswordValue = signupPassword.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(signupEmailValue, signupPasswordValue) // Para registrar un nuevo usuario con correo y contraseña y también hacer que entre.
    .then(function(promise) {
      location.href = 'views/muro.html';
      promise.catch(event => console.log(event.message));
    });
});

firebase.auth().onAuthStateChanged(firebaseUser => { // cuando detecta que el usuario se ha "logeado"
  if (firebaseUser) {
    // console.log(firebaseUser);
    location.href = 'views/muro.html';
  } else {
    console.log('not logged in');
    logout.classList.add('hide');
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
      // console.log(result);
      // console.log(provider);
    });
});
