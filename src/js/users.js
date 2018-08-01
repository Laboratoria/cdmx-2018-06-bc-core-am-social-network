document.getElementById('buttonSignIn').addEventListener('click', event => {
  let newEmail = document.getElementById('newUserMail').value;
  let newPassword = document.getElementById('newUserPass').value;


  if (newEmail === null && newPassword === null) {
    console.log('No puede haber campos vacios!');
  } else {
    addUser(newEmail, newPassword);
  }
});

observer();