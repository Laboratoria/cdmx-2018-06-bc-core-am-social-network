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
const signup = document.getElementById('signup');
const logout = document.getElementById('logout');

// Agregar evento para el botón de inicio de sesión
login.addEventListener('click', event => {
  event.preventDefault();
  console.log('hola');
  // Obtenemos valor de email y password
  const emailValue = email.value;
  const passwordValue = password.value;
  const auth = firebase.auth();
  // Para iniciar sesión 
  const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
  promise.catch(event => console.log(event.message));
});

// Añadiendo el evento del botón de registrarse

signup.addEventListener('click', event => {
  event.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue);
  promise.catch(event => console.log(event.message));
});

logout.addEventListener('click', event => {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log('not logged in');
    logout.classList.add('hide');
  }
});

// Para ingresar con google

const provider = new firebase.auth.GoogleAuthProvider();
const loginGoogle = document.getElementById('login-google');

loginGoogle.addEventListener('click', event => {
  event.preventDefault();
  firebase.auth()
    .signInWithPopup(provider) // popUp te va a dar la ventana de acceso a tu cuenta de google. parámetro de la variable provider que tiene la autenticación con google

    .then(function(provider) { // entonces ejecuta la función que es el resultado (acceder con google)
      console.log(result);
      console.log(provider);
    });
});
