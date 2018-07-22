// Get HTML elements for Login
const email = document.getElementById('mail');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnSign = document.getElementById('btnSign');
const btnSignup = document.getElementById('btnSignup');
const name = document.getElementById('name');
const btnFb = document.getElementById('btnFb');
const btnGg = document.getElementById('btnGg');

// Sign up new users
btnSign.addEventListener('click', e => {
  name.style.display = "block";
  btnLogin.style.display = "none";
  btnFb.style.display = "none";
  btnGg.style.display = "none";
  btnSign.style.display = "none";
  btnSignup.style.display = "block";
});

// Crear usuario nuevo mail, contraseña, nombre
btnSignup.addEventListener('click', e => {
  const mail = email.value;
  const pass = password.value;
  const nameValue = name.value;

  const promise = firebase.auth().createUserWithEmailAndPassword(mail, pass);
  promise.catch(e => console.log(e.message))

  let ref = database.ref('user');
  let data = {
    name: nameValue,
    mail: mail,
    message: {
    }
  }
  ref.push(data);
  window.location.reload();
});

// Login con email y password
btnLogin.addEventListener('click', e => {
  const mail = email.value;
  const pass = password.value;

  const promise = firebase.auth().signInWithEmailAndPassword(mail, pass);
  promise.catch(e => console.log(e.message))
});

//Login with Google
btnGg.addEventListener('click', e => {

});


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.assign('views/home.html');

  } else {
    console.log('no se ha accesado');
  }
});



