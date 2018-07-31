let config = {
  apiKey: 'AIzaSyBSQUIbzVSxmdELMXnGowhEkEH2QX0joEQ',
  authDomain: 'social-network-edfb3.firebaseapp.com',
  databaseURL: 'https://social-network-edfb3.firebaseio.com',
  projectId: 'social-network-edfb3',
  storageBucket: 'social-network-edfb3.appspot.com',
  messagingSenderId: '342564191947'
};
firebase.initializeApp(config);
let db = firebase.firestore();

const addUser = (newEmail, newPassword) => {
  firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert('Usuario o contraseña no validos! Recuerda que no debe haber campos vacios.');
  });
};

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

const enterUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert('Usuario o contraseña incorrectos!');
  });
};

const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('usuario activo');
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      console.log(user.emailVerified);
      
  
      location.assign('wall.html');
    }
  });
};
  
observer();