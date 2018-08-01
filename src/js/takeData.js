let email = document.getElementById('userMail');
let password = document.getElementById('userPass');
let newEmail = document.getElementById('newUserMail');
let newPassword = document.getElementById('newUserPass');

document.getElementById('signIn').addEventListener('click', event => {
   enterUser(email.value, password.value);
});

document.getElementById('signUp').addEventListener('click', event => {
   addUser(newEmail.value, newPassword.value);
});