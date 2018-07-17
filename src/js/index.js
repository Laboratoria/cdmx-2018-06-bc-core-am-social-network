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
//
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
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(result);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  console.log(error);
  var errorCode = error.code;
  console.log(errorCode);
  var errorMessage = error.message;
  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
  console.log(email);
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(credential);
  // ...
});
}
