










// Inicializar Firebase
 const config = {
   apiKey: "AIzaSyCt9yjfxwLkam9k--FRqUyqn-nw2pOgrdY",
   authDomain: "diabetessocialmedia.firebaseapp.com",
   databaseURL: "https://diabetessocialmedia.firebaseio.com",
   projectId: "diabetessocialmedia",
   storageBucket: "diabetessocialmedia.appspot.com",
   messagingSenderId: "1728202919"
 };
  firebase.initializeApp(config);

const authentificationsUsers = document.getElementById('button');
authentificationsUsers.addEventListener('click', (event) =>{
  authGoogle();
});
authGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentificating(provider);
}
authentificating = (provider) =>{
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // Da el Token de acceso a Google. Usar para acceder a la API de Google
  var token = result.credential.accessToken;
  // Datos del usuario logeado
  var user = result.user;
  console.log(result);
}).catch(function(error) {
  // enerar error
  var errorCode = error.code;
  var errorMessage = error.message;
  // Este email ya esta en uso
  var email = error.email;
  console.log(email);
  // Los permisos del firebase.auth.AuthCredential ya fueron usados.
  var credential = error.credential;
  console.log(credential);
});
}

/*const userPrintSpace = document.getElementById('obj');
let database = firebase.database().ref().child('obj');
database.on('value', snap => console.log(snap.val()));*/
