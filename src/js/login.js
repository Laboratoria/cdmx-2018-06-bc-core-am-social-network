initializeFirebase();
verifyLoginUser();

document.getElementById('login-button').addEventListener('click', event => {
    event.preventDefault();
    let email = document.getElementById('email-field').value;
    let password = document.getElementById('password-field').value;
    loginUser(email, password);    
});

document.getElementById('google-sign-in').addEventListener('click', event => {
    event.preventDefault();
    googleUserLogin();
});

document.getElementById('facebook-sign-in').addEventListener('click', event => {
    event.preventDefault();
    facebookUserLogin();
});

document.getElementById('twitter-sign-in').addEventListener('click', event => {
    event.preventDefault();
    twitterUserLogin();
});

document.getElementById('github-sign-in').addEventListener('click', event => {
    event.preventDefault();
    githubUserLogin();
})