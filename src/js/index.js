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

  // Get sections

  const logInSection = document.getElementById('log-in-section');
  const loggedInSection = document.getElementById('logged-in-section');

  // Get elements

  const txtName = document.getElementById('txt-name');
  const txtEmail = document.getElementById('txt-email');
  const txtPassword = document.getElementById('txt-password');
  const btnLogin = document.getElementById('btn-login');
  const btnSignUp = document.getElementById('btn-sign-up');
  const btnLogout = document.getElementById('btn-logout');

  // Add login event
  btnLogin.addEventListener('click', event => {
    // Get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(event => alert(event.message));
  });

  // Add signup event
  btnSignUp.addEventListener('click', event => {
    // Get email and password
    // TODO: CHECK 4 REAL EMAILZ
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
      .catch(event => alert(event.message));
  });

  btnLogout.addEventListener('click', event => {
    firebase.auth().signOut();
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
      // logInSection.style.display = 'none';
      // loggedInSection.style.display = 'initial';
      loggedInSection.classList.remove('hide');
      logInSection.classList.add('hide');
      let user = firebase.auth().currentUser;
      if (user !== null) {
        // let emailId = user.email;
        user.updateProfile({
          displayName: txtName.value
        });
        document.getElementById('user_paragraph').innerHTML = `Bienvenidx ${user.displayName}`;
      }
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
      // logInSection.style.display = 'initial';
      // loggedInSection.style.display = 'none';
      loggedInSection.classList.add('hide');
      logInSection.classList.remove('hide');
    }
  });
}());