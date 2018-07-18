// Initialize Firebase //
window.initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyA2_g2xx4nNZIKuqwbaUwk3HaA4mEesgCM",
        authDomain: "garnachapp-labo.firebaseapp.com",
        databaseURL: "https://garnachapp-labo.firebaseio.com",
        projectId: "garnachapp-labo",
        storageBucket: "",
        messagingSenderId: "805982016843"
    });
  },
  
  // Login Function... User and email validation //
  window.loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((event) => {
      location.href = ('views/view1.html');
    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña invalida');
      } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email') {
        alert('Por favor verifica tu usuario');
      }
    });
  }

  // Current user function //
  window.currentUserLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log('siii');
    } else {
      // No user is signed in.
      console.log('nooo');
    }
  });
},
  
  // Log Out Function //
 window.logOutUser = () => {
   firebase.auth().signOut().then(() => {
    // Sign-out successful.
    localStorage.clear();
    location.href = ('../views/logOut.html');
  }).catch(function(error) {
    // An error happened.
    alert('Ocurrió un error, intenta salir nuevamente.');
  });
}



  window.checkLoggedUser = (user) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        window.location.href = ('views/view1.html');
  
      } else {
        // No user is signed in.
        window.location.href = ('index.html');
      }
    });
  }
  
  
  // Initialize Cloud Firestore through Firebase
  // window.initializeFirestore = () => {
  //   let db = firebase.firestore();
  // }
  
  window.createNewUser = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }