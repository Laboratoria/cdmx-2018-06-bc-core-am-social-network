(function() {
  // Get elements
  const txtEmail = document.getElementById('txt-email');
  const txtPassword = document.getElementById('txt-password');
  const btnLogin = document.getElementById('btn-login');
  const btnLoginGoogle = document.getElementById('btn-google');
  let provider = new firebase.auth.GoogleAuthProvider();
  // Add login event with Google
  btnLoginGoogle.addEventListener('click', event => {
    // Sign in
    const promise = firebase.auth().signInWithRedirect(provider);
    promise.catch(event => alert(event.message));
  });
  
  // // Add login event
  // btnLogin.addEventListener('click', event => {
  //   // Get email and password
  //   const email = txtEmail.value;
  //   const password = txtPassword.value;
  //   const auth = firebase.auth();
  //   // Sign in
  //   const promise = auth.signInWithEmailAndPassword(email, password);
  //   promise.catch(event => alert(event.message));
  // });
  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) { 
      console.log(firebaseUser);
      window.location.assign('../src/views/home.html');
    }
  });
}());