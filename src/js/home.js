(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyC20SbyxB9RKJgcfTvfYuhJKxuuxh0RQBQ',
    authDomain: 'prueba-firebase-ef04b.firebaseapp.com',
    databaseURL: 'https://prueba-firebase-ef04b.firebaseio.com',
    projectId: 'prueba-firebase-ef04b',
    storageBucket: 'prueba-firebase-ef04b.appspot.com',
    messagingSenderId: '499846254860'
  };
  firebase.initializeApp(config);

  // Get elements
  const btnLogout = document.getElementById('btn-logout');

  // Add logout event
  btnLogout.addEventListener('click', event => {
    firebase.auth().signOut();
    window.location.assign('../index.html');
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('not logged in');
    }
  });
}());