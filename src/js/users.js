document.getElementById('registrationCompleted').addEventListener('click', event => {
  let newEmail = document.getElementById('newEmail').value;
  let newPassword = document.getElementById('newPassword').value;
  /* let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let dateBorn = document.getElementById('dateBorn').value; */

  if (newEmail === null && newPassword === null) {
    console.log('No puede haber campos vacios!');
  } else {
    addUser(newEmail, newPassword);
  }
});

observer();