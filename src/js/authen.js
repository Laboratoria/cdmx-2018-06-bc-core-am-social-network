let config = {
  apiKey: "AIzaSyBmvR-XICKHnSpAsppIMfCA9vfE3lT3yBU",
  authDomain: "feminismi-6e40a.firebaseapp.com",
  databaseURL: "https://feminismi-6e40a.firebaseio.com",
  projectId: "feminismi-6e40a",
  storageBucket: "feminismi-6e40a.appspot.com",
  messagingSenderId: "638405712713"
};
  firebase.initializeApp(config);

window.authen = {
  registerAccount: (email,password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorMessage);
    // ...
    });
  },

  loginAccount: (enterEmail,enterPassword) => {
    firebase.auth().signInWithEmailAndPassword(enterEmail, enterPassword)
    .catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
  },

  loginGoogle: () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
    });
  },

  loginFacebook: () => {
    let provider= new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
    });
  }
};

const monitor = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      // document.location.assign('../src/views/view1.html');
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      window.open('../src/views/view1.html','_self');
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}; 
monitor(); 