let appFirebase = {};
(function() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyC20SbyxB9RKJgcfTvfYuhJKxuuxh0RQBQ',
    authDomain: 'prueba-firebase-ef04b.firebaseapp.com',
    databaseURL: 'https://prueba-firebase-ef04b.firebaseio.com',
    projectId: 'prueba-firebase-ef04b',
    storageBucket: 'prueba-firebase-ef04b.appspot.com',
    messagingSenderId: '499846254860',
  };
  firebase.initializeApp(config);
  appFirebase = firebase;
}());