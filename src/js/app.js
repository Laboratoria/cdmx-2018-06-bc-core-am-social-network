$('#login').click(function(){
    authGoogle();
  })
   function authGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
   }
   function authentication(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(result);
      // ...
    }).catch(function(error) {
        console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      console.log(error.Code);
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(credential);
      // ...
    });
   }