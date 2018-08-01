document.getElementById('buttonLogin').addEventListener('click', event => {
  let email = document.getElementById('userMail').value;
  let password = document.getElementById('userPass').value;
  
  if (email === null && password === null) {
    console.log('No se admiten campos vacios');
  } else {
    enterUser(email, password);
  }
});

observer();