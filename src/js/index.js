// Initialize Firebase
window.initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyA2_g2xx4nNZIKuqwbaUwk3HaA4mEesgCM",
        authDomain: "garnachapp-labo.firebaseapp.com",
        databaseURL: "https://garnachapp-labo.firebaseio.com",
        projectId: "garnachapp-labo",
        storageBucket: "",
        messagingSenderId: "805982016843"
    });
  }
  
  window.checkLoggedUser = (user) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        window.location.href = ('views/newsfeed.html');
  
      } else {
        // No user is signed in.
        window.location.href = ('index.html');
      }
    });
  }
  
  
  // Initialize Cloud Firestore through Firebase
  window.initializeFirestore = () => {
    let db = firebase.firestore();
  }
  
  
  window.loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña invalida');
      } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email') {
        alert('Por favor verifica tu usuario');
      }
    });
  }
  
  
  window.signOutUser = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  
  
  window.createNewUser = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }