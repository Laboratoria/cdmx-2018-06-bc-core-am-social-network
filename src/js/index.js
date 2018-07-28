// Initialize Firebase
let config = {
  apiKey: 'AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y',
  authDomain: 'social-network-5b9ef.firebaseapp.com',
  databaseURL: 'https://social-network-5b9ef.firebaseio.com',
  projectId: 'social-network-5b9ef',
  storageBucket: '',
  messagingSenderId: '1074635944561'
};
firebase.initializeApp(config); // con el método firebase.initializeApp se aplica la configuración que está nuestra variable config

var database = firebase.database();


// Getting elements (obteniendo elementos globales: inputs y botones)
let mail = document.getElementById('email');
let password = document.getElementById('password');
let username = document.getElementById('first_name');
let lastname = document.getElementById('last_name');
// botones
const logInBtn = document.getElementById('log-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
let loginGoogleBtn = document.getElementById('login-google-btn');
let loginFacebookBtn = document.getElementById('login-facebook-btn');

// botón de registrarse (sign up) escucha el evento click y ejecuta una función
signUpBtn.addEventListener('click', event => {
  if (mail.value === '' || mail.value === ' ' || password.value === '' || password.value === ' ') {
    alert('No ingresaste un correo o una contraseña válida'); // agregamos una condicional para el control de flujo
  } else { // mandamos los valores de email y password como parámetros al método createUserEmailAndPassword
    let emailValue = email.value;
    let passwordValue = password.value;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(emailValue, passwordValue) // con este método creamos el usuario en la base de datos firebase
      .then((user)=>{
        const newUser = auth.currenUser;
        newUser.updateProfile({displayName: username});
        location.href = '../src/views/view1.html';
        console.log('usuario registrado');
      })
      .catch((error)=> {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);-
        alert(errorMessage); // "this email adress is already use by another account"
      });
  }
});

// agregar evento click al botón de log in (iniciar sesión)
logInBtn.addEventListener('click', event => {
  if (mail.value === '' || mail.value === ' ' || password.value === '' || password.value === ' ') { // condicionando el flujo de inicio de sesión 
    alert('No ingresaste un correo o una contraseña válida');
  } else {
    let emailValue = mail.value;
    let passwordValue = password.value;
    const auth = firebase.auth(); // método de firebase para hacer la autenticación de los datos
    auth.signInWithEmailAndPassword(emailValue, passwordValue)
      .then(()=>{
        console.log('has iniciado sesión');
        location.href = '../src/views/view1.html';
      // window.homeNetwork.mostrar(usuario); // llamamos a la función que creamos en app.js para cambiar de página
      })
      .catch((error)=> {
        let errorCode = error.code;
        let errorMessage = error.message; 
        console.log(errorCode);
        alert(errorMessage); // mensaje de firebase "This password is invalid or the user does not have a password"
      });
  };
});

// autenticar con GOOGLE
loginGoogleBtn.addEventListener('click', event=>{
  const provider = new firebase.auth.GoogleAuthProvider();// google es nuestro proveedor y lo autentifique con firebase
  firebase.auth()  
    .signInWithPopup(provider) // popUp te va a dar la ventana de acceso a tu cuenta de google. parámetro de la variable provider que tiene la autenticación con google
    .then((result)=> { // entonces ejecuta la función que es el resultado (acceder con google)
      location.href = '../src/views/view1.html';
    });
});

// autenticar con Facebook
loginFacebookBtn.addEventListener('click', event =>{
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result)=> { // entonces ejecuta la función que es el resultado (acceder con google)
      location.href = '../src/views/view1.html';
      console.log('login con facebook');
    });
});


