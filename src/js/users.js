document.getElementById('registrationCompleted').addEventListener('click', event => {
  let newEmail = document.getElementById('newEmail').value;
  let newPassword = document.getElementById('newPassword').value;

  if (newEmail === null && newPassword === null) {
    console.log('No puede haber campos vacios!');
  } else {
    addUser(newEmail, newPassword);
  }
});

observer();