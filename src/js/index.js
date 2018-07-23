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
const logInBtn = document.getElementById('log-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
// let publicarBtn = document.getElementById('publicar-btn');
// let logoutBtn = document.getElementById('logout-btn');
// declarando función "launcher" que inicialice la config de firebase

// botón de registrarse (sign up) escucha el evento click y ejecuta una función
signUpBtn.addEventListener('click', event => {
  if (mail.value === '' || mail.value === ' ' || password.value === '' || password.value === ' ') {
    alert('No ingresaste un correo o una contraseña válida'); // agregamos una condicional para el control de flujo
  } else { // mandamos los valores de email y password como parámetros al método createUserEmailAndPassword
    let emailValue = email.value;
    let passwordValue = password.value;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(emailValue, passwordValue) // con este método creamos el usuario en la base de datos firebase
      .then(()=>{
        location.href = 'views/view1.html';
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
    let usuario = { // objeto que pintamos en el dom al cambiar la página
      // name: username.value,
      // apellido: lastname.value,
      email: email.value
    };
    auth.signInWithEmailAndPassword(emailValue, passwordValue)
      .then(()=>{
        console.log('has iniciado sesión');
        localStorage.setItem('key', JSON.stringify(usuario)); // localStorage regresa solo strings al dom. necesitamos que reciba una clave y un valor
        // para iniciar sesión (log in)
        window.homeNetwork.mostrar(usuario); // llamamos a la función que creamos en app.js para cambiar de página
      })
      .catch((error)=> {
        let errorCode = error.code;
        let errorMessage = error.message; 
        console.log(errorCode);
        alert(errorMessage); // mensaje de firebase "This password is invalid or the user does not have a password"
      });
    localStorage.setItem('key', JSON.stringify(usuario));
    window.homeNetwork.mostrar(usuario);
  }
});

// autenticar con GOOGLE
let loginGoogleBtn = document.getElementById('login-google-btn');

loginGoogleBtn.addEventListener('click', event=>{
  const provider = new firebase.auth.GoogleAuthProvider();// google es nuestro proveedor y lo autentifique con firebase
  firebase.auth()  
    .signInWithPopup(provider) // popUp te va a dar la ventana de acceso a tu cuenta de google. parámetro de la variable provider que tiene la autenticación con google
    .then((result)=> { // entonces ejecuta la función que es el resultado (acceder con google)
      console.log(result);
      console.log(provider);
    });
});


firebase.auth().onAuthStateChanged(user => { // cambiar el estado de logeado a no logeado
  if (user) {
    // estamos logueados
    console.log(user);
  } else {
    // no estamos logueados
    console.log('not logged in ');
    // logoutBtn.classList.add('hide');
  }
});

const logoutBtn = document.getElementById('logout-btn');
logoutBtn. addEventListener('click', event=>{
  firebase.auth().signOut()
    .then(() =>{
      alert(' BYE!');
    })
    .catch();
});
 
let loginFacebookBtn = document.getElementById('login-facebook-btn');
loginFacebookBtn.addEventListener('click', event =>{
  const provider = new firebase.auth.FacebookAuthProvider();
  // provider.setCostumParameters({
  //   'display': 'popup'
  // });
  firebase.auth().signInWithPopup(provider)
    .then((result)=> { // entonces ejecuta la función que es el resultado (acceder con google)
      console.log('login con facebook');
    });
});

// Firebase database

// const messageInput = document.getElementsByClassName('inputMessage');
// const message = ()=>{
//   let currentUser = firebase.auth().currentUser;
//   let messageValue = messageInput.value;
//   firebase.database().ref()
// };