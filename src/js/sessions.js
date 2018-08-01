const addUser = (newEmail, newPassword) => {
  firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
    .then(function() {
      console.log(newEmail);
      console.log(newPassword);
      emailChecker();
    }).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert('Usuario o contraseña no validos! Recuerda que no debe haber campos vacios.');
    });
};

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

const enterUser = (email, password) => {
  localStorage.clear();
  localStorage.setItem('mail', email);
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
      if (user.emailVerified) {
        location.replace('views/wall.html');
      }
    }
  });
};

observer();

const emailChecker = () => {
  let user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    console.log('Email sent.');
  }).catch(function(error) {
    // An error happened.
  });
};