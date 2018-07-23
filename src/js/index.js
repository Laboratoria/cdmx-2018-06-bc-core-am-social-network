var config = {
  apiKey: "AIzaSyBIK_C5c7qWNN5vdWV3SF5WjPkfah4o4hHQ",
  authDomain: "foodness-inc.firebaseapp.com",
  databaseURL: "https://foodness-inc.firebaseio.com",
  storageBucket: "foodness-inc.appspot.com",
  messagingSenderId: "705442568830",
};
firebase.initializeApp(config);
console.log('estas dentro del firebase');
// DOM.
//El login con correo ya sirve bien, checarlo.
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById(`btnSignUp`);
const btnLogout = document.getElementById('btnLogout');

    // Evento  para el boton LogIn
    btnLogin.addEventListener( 'click', e => {
    //Obteniendo e-mail y password
    console.log('se escucho el evento click en el boton login')
    const email = txtEmail.value;
    const passw = txtPassword.value;
    const auth = firebase.auth();
    //  Sign In
    const promise = auth.signInWithEmailAndPassword(email, passw);
    promise.catch(e => console.log(e.message));

});
    // Evento para el boton SignUp
    btnSignUp.addEventListener('click', e =>{
    //Creando usuarios con el btnSignUp
    const email = txtEmail.value;
    const passw = txtPassword.value;
    const auth = firebase.auth();
    //  Sign In
    const promise = auth.createUserWithEmailAndPassword(email, passw);
    promise.catch(e => console.log(e.message));
    btnLogout.addEventListener('click', e =>{
     firebase.auth().signOut();
    });

// Se identifica al usuario y se deja entrar a la firebase console
        firebase.auth().onAuthStateChanged( firebaseUser =>{
        if(firebaseUser){
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
        }else{
        console.log('Not logged in');
        btnLogout.classList.add('hide');
        }
        });
    });

//Login con Google
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()

   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()

   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')
   });
}
//Login con Facebook
// Hay que hacer el punto 2 y el 3 a para obtener el APP ID y habilitarla aqui
//dicen como https://firebase.google.com/docs/auth/web/facebook-login?hl=es-419
window.fbAsyncInit = function() {
   FB.init ({
      appId      : 'APP_ID', //aqui agregar el app id de fb que se consiguio y ya
      xfbml      : true,
      version    : 'v2.6'
   });
};

(function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));

var provider = new firebase.auth.FacebookAuthProvider();

function facebookSignin() {
   firebase.auth().signInWithPopup(provider)

   .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token)
      console.log(user)
   }).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
   });
}

function facebookSignout() {
   firebase.auth().signOut()

   .then(function() {
      console.log('Signout successful!')
   }, function(error) {
      console.log('Signout failed')
   });
}
const Siguiente = () => {
//mandar a wall.html
}
