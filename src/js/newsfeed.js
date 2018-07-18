initializeFirebase();
currentUserLoggedIn();

document.getElementById('log-out-btn').addEventListener('click', (event) => {
  event.preventDefault();
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    location.href = ('logOut.html');
  }).catch(function(error) {
    // An error happened.
    alert('Ocurrió un error, intenta salir nuevamente.');
  });
})