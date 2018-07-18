initializeFirebase();
currentUserLoggedIn();

document.getElementById("login-button").addEventListener('click', event => {
    event.preventDefault();
     const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value; 
    loginUser(email, password);
});