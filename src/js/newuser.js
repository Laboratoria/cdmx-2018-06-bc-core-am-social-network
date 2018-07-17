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
  const txtName = document.getElementById('txt-name');
  const txtEmail = document.getElementById('txt-email');
  const txtPassword = document.getElementById('txt-password');
  const btnSignUp = document.getElementById('btn-sign-up');

  // Add signup event
  btnSignUp.addEventListener('click', event => {
    // Get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
      .catch(event =>
        alert(event.message));
  });

  // Add a realtime listener

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      window.location.assign('../views/home.html');
      let user = firebase.auth().currentUser;
      if (user !== null) {
        user.updateProfile({
          displayName: txtName.value
        });
        document.getElementById('user-paragraph').innerHTML = ` Bienvenido ${user.displayName};`;
      }
    } else {
      console.log('not logged in');
    }
  });
}());

