var config = {
  apiKey: "AIzaSyBIK_C5c7qWNN5vdWV3SF5WjPkfah4o4hHQ",
  authDomain: "foodness-inc.firebaseapp.com",
  databaseURL: "https://foodness-inc.firebaseio.com",
  storageBucket: "foodness-inc.appspot.com",
  messagingSenderId: "705442568830",
};
firebase.initializeApp(config);

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
//funcionalidad del boton de fb y el login normal
// agregar el local storage para el primer comentario 
