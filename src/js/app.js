$('#login').click(function() {
  authGoogle();
});

const authGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
};
const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log(result);
      // ...
    }).catch(error => {
      console.log(error);
      // Handle Errors here.
      let errorCode = error.code;
      console.log(error.Code);
      let errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log(credential);
      // ...
    });
};

const authFacebook = () => {
  let providervar = new firebase.auth.FacebookAuthProvider();
  authentication(provider);
};
const authenticationF = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log(result);
      // ...
    }).catch(error => {
      console.log(error);
      // Handle Errors here.
      let errorCode = error.code;
      console.log(error.Code);
      let errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log(credential);
      // ...
    });
};