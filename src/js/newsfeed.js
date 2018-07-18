initializeFirebase();
currentUserLoggedIn();

document.getElementById('log-out-btn').addEventListener('click', (event) => {
  event.preventDefault();
  logOutUser();
})