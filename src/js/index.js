(function() {
  // Get elements
  const txtEmail = document.getElementById('txt-email');
  const txtPassword = document.getElementById('txt-password');
  const btnLogin = document.getElementById('btn-login');

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

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      window.location.assign('../src/views/home.html');
      let user = firebase.auth().currentUser;
      if (user !== null) {
        // let emailId = user.email;
        user.updateProfile({
          displayName: txtName.value
        });
        document.getElementById('user-paragraph').innerHTML = `Bienvenidx ${user.displayName}`;
      }
    } else {
      console.log('not logged in');
    }
  });
}());