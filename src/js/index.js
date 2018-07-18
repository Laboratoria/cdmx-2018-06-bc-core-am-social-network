var config = {
  apiKey: "AIzaSyBIK_C5c7qWNN5vdWV3SF5WjPkfah4o4hHQ",
  authDomain: "foodness-inc.firebaseapp.com",
  databaseURL: "https://foodness-inc.firebaseio.com",
  storageBucket: "foodness-inc.appspot.com",
  messagingSenderId: "705442568830",
};
firebase.initializeApp(config);
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const LogIn =document.getElementById('LogIn');
const SignUp = document.getElementById('SignUp');
const LogOut = document.getElementById('LogOut');
// Funcionalidad del boton LogIn
LogIn.addEventListener( 'click', e => {
//Obteniendo e-mail y password
const email = intText.value;
const passw = intPass.value;
const auth = firebase.auth();
//  Sign In
const promise = auth.signInWithEmailAndPassword(email, passw);
promise.catch(e => console.log(e.message));
});
// Funcionalidad del boton SignUp
   SignUp.addEventListener('click', e =>{
   //Creando usuarios con SignUp
   const email = intText.value;
   const passw = intPass.value;
   const auth = firebase.auth();
   // Se entra con Sign In
   const promise = auth.createUserWithEmailAndPassword(email, passw);
   promise.catch(e => console.log(e.message));
   LogOut.addEventListener('click', e =>{
    firebase.auth().SignOut();
   });
   // Se identifica al usuario y se deja entrar a la firebase console (listener de autentificacion en tiempo real)
        firebase.auth().onAuthStateChanged( firebaseUser =>{
        if(firebaseUser){
        console.log(firebaseUser);
        LogOut.classList.remove('hide');
        }else{
        console.log('Not logged in');
        LogOut.classList.add('hide');
        }
        });
    });

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
const Siguiente = () => {
//mandar a wall.html
}