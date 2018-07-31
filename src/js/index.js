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
  localStorage.clear();
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

// Borra localStorage
btnGg.addEventListener('click', e => {
  localStorage.clear();
  localStorage.setItem('mail', 'google');
  googleLogin();
});

// Función para Login con Facebook
const googleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
  console.log("google");
}

// Login con Facebook
btnFb.addEventListener('click', e => {
  localStorage.clear();
  localStorage.setItem('mail', 'facebook');
  facebookLogin();
});

const facebookLogin = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  authentication(provider);
}


const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    localStorage.setItem('user', user);
    let displayName = user.displayName
    localStorage.setItem('display', displayName);
    let photo = user.photoURL
    localStorage.setItem('photo', photo)
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let userUid = user.uid
    localStorage.setItem("userUid", userUid);
    window.location.assign('views/home.html');

  } else {
    console.log('no se ha accesado');
  }
});
