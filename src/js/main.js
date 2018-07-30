socialNetwork.initFirebase();
document.getElementById('btn-login').addEventListener('click', event => {
  event.preventDefault();
  let email = document.getElementById('login-email').value;
  let password = document.getElementById('login-password').value;
  socialNetwork.loginUser(email, password);
});

document.getElementById('btn-google').addEventListener('click', event => {
  event.preventDefault();
  socialNetwork.loginWithGoogle();
});

document.getElementById('btn-facebook').addEventListener('click', event => {
  event.preventDefault();
  socialNetwork.loginWithFacebook();
});