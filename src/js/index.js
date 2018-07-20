// Initialize Firebase
let config = {
  apiKey: 'AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y',
  authDomain: 'social-network-5b9ef.firebaseapp.com',
  databaseURL: 'https://social-network-5b9ef.firebaseio.com',
  projectId: 'social-network-5b9ef',
  storageBucket: '',
  messagingSenderId: '1074635944561'
};

// Getting elements (obteniendo elementos globales: inputs y botones)
let mail = document.getElementById('email');
let password = document.getElementById('password');
const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');
let username = document.getElementById('first_name');
let lastname = document.getElementById('last_name');

// declarando función "launcher" que inicialice la config de firebase
const launcher = () => {
  firebase.initializeApp(config); // con el método firebase.initializeApp se aplica la configuración que está nuestra variable config

  // botón de registrarse (sign up) escucha el evento click y ejecuta una función
  signUp.addEventListener('click', event => {
    //  if (mail.value === "" || mail.value === " " || password.value === "" || password.value === " ") {
    //  alert("No ingresaste un correo o una contraseña válida") //agregamos una condicional para el control de flujo
    //  } else { // mandamos los valores de email y password como parámetros al método createUserEmailAndPassword
    let emailValue = email.value;
    let passwordValue = password.value;
    const auth = firebase.auth();
    // para registrarse ( sign in)
    const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue); // con este método creamos el usuario en la base de datos firebase
    promise.catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(promise);
    }); // declaramos una constante promise que ejecute un alert en caso de error si el correo ya está regregistrado
    // }
  });

  // agregar evento click al botón de log in (iniciar sesión)
  logIn.addEventListener('click', event => {
    // condicionando el flujo de inicio de sesión 
    if (mail.value === '' || mail.value === ' ' || password.value === '' || password.value === ' ') {
      alert('No ingresaste un correo o una contraseña válida');
    } else {
      let emailValue = mail.value;
      let passwordValue = password.value;
      const auth = firebase.auth(); // método de firebase para hacer la autenticación de los datos
      let usuario = { // objeto que pintamos en el dom al cambiar la página
        name: username.value,
        apellido: lastname.value,
        email: email.value
      };
      const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue); 
      promise.catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message; 
      });
      localStorage.setItem('key', JSON.stringify(usuario)); // localStorage regresa solo strings al dom. necesitamos que reciba una clave y un valor
      // para iniciar sesión (log in)
      window.homeNetwork.mostrar(usuario); // llamamos a la función que creamos en app.js para cambiar de página
    }
  });


  firebase.auth().onAuthStateChanged(firebaseUser => { // cambiar el estado de logeado a no logeado
    if (firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('not logged in ');
    }
  });
};
launcher();

// autenticar con GOOGLE
const provider = new firebase.auth.GoogleAuthProvider();
const loginGoogle = document.getElementById('login-google');

loginGoogle.addEventListener('click', event=>{
  firebase.auth()
    .signInWithPopup(provider) // popUp te va a dar la ventana de acceso a tu cuenta de google. parámetro de la variable provider que tiene la autenticación con google
    .then(function(result) { // entonces ejecuta la función que es el resultado (acceder con google)
      console.log(result);
      console.log(provider);
    });
});