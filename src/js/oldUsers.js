document.getElementById('logIn').addEventListener('click', event => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  if (email === null && password === null) {
    console.log('No se admiten campos vacios');
  } else {
    enterUser(email, password);
  }
});

observer();