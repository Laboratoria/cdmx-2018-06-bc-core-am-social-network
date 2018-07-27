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
  localStorage.setItem("mail", mail)

  const promise = firebase.auth().createUserWithEmailAndPassword(mail, pass)
  .then(function(){
    promise.catch(e => console.log(e.message))
    let ref = database.ref('user');
    let data = {
      name: nameValue,
      mail: mail
    }
    ref.push(data);
    setTimeout((event) => { window.location.reload();}, 2000);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert("Verifica tus datos");
    // ...
  });
});


// Login con email y password
btnLogin.addEventListener('click', e => {
  const mail = email.value;
  const pass = password.value;
  localStorage.setItem("mail", mail)
  const promise = firebase.auth().signInWithEmailAndPassword(mail, pass)
  .then(function(){
    promise.catch(e => console.log(e.message))
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert("Verifica tus datos");
    // ...
  });
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.assign('views/home.html');

  } else {
    console.log('no se ha accesado');
  }
});

btnGg.addEventListener('click', e => {
  let provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
  console.log("google");
});

// Login con Facebook
btnFb.addEventListener('click', e => {
  let provider = new firebase.auth.FacebookAuthProvider();
  authentication(provider);
  console.log("Facebook");
});

const authentication = (provider) => {
  const auth = firebase.auth();
  const promise = auth.signInWithPopup(provider);
  console.log(promise);
  promise
  .then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // console.log(error);
    // Handle Errors here.
    const errorCode = error.code;
    // console.log(errorCode);
    const errorMessage = error.message;
    // console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    // console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // console.log(credential);
    // ...
  });
};
