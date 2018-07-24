let register = document.getElementById('register');
let enter = document.getElementById('enter');
let loginGoogle = document.getElementById('google-user');
let loginFacebook = document.getElementById('facebook-user');

register.addEventListener('click', event => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let userName = document.getElementById('user-name').value;
  if (userName != '') {
    authen.registerAccount(email,password);
  } else {
    alert('Ingresa un nombre de usuario');
  }
});

enter.addEventListener('click', event => {
  let enterEmail = document.getElementById('enter-email').value;
  let enterPassword = document.getElementById('enter-password').value;
  authen.loginAccount(enterEmail,enterPassword);
});

loginGoogle.addEventListener('click', event => {
  authen.loginGoogle();
});

loginFacebook.addEventListener('click', event => {
  authen.loginFacebook();
});