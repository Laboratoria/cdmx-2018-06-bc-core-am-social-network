document.getElementById('login').addEventListener('click', event =>{
  event.preventDefault();
  window.userRegister.loginGoogle();
});


document.getElementById('face').addEventListener('click', event =>{
  event.preventDefault();
  window.userRegister.loginFacebook();
});

document.getElementById('gith').addEventListener('click', event =>{
  event.preventDefault();
  window.userRegister.loginGitHub();
});
