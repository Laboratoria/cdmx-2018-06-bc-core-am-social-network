// Elementos del HTML
const email = document.getElementById('mail');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnSign = document.getElementById('btnSign');
const btnSignup = document.getElementById('btnSignup');
const name = document.getElementById('name');
const btnFb = document.getElementById('btnFb');
const btnGg = document.getElementById('btnGg');

// Acción del botón de registro inicial
btnSign.addEventListener('click', el => {
  name.style.display = 'block';
  btnLogin.style.display = 'none';
  btnFb.style.display = 'none';
  btnGg.style.display = 'none';
  btnSign.style.display = 'none';
  btnSignup.style.display = 'block';
});

// Crear usuario nuevo mail, contraseña, nombre
btnSignup.addEventListener('click', el => {
  // Se toman los valores de los inputs
  const mail = email.value;
  const pass = password.value;
  const nameValue = name.value;
  // Se guarda el mail en Local Storage con el key 'mail'
  localStorage.setItem('mail', mail);

  const promise = firebase.auth().createUserWithEmailAndPassword(mail, pass)
    .then(function() {
      promise.catch(el => console.log(e.message));
      let ref = database.ref('user');
      // Se pasan los valores nombre y mail a la base de datos de firebase
      let data = {
        name: nameValue,
        mail: mail
      };
      ref.push(data);
      /* Se agrega una función que recargue la página al final del registro
      para que al momento de recargar el observador detecte el inicio de sesión 
      y redirija al usuario a nuestra vista home*/
      setTimeout((event) => {
        window.location.reload();
      }, 2000);
    })
    .catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // Si los datos son incorrectos se lanza mensaje de verificación
      alert('Verifica tus datos');
    // ...
    });
});


// Login con email y password
btnLogin.addEventListener('click', el => {
  // Se toman los valores de los inputs
  const mail = email.value;
  const pass = password.value;
  // Se vacia localStorage y se le asigna el mail en el key mail
  localStorage.clear();
  localStorage.setItem('mail', mail);
  const promise = firebase.auth().signInWithEmailAndPassword(mail, pass)
    .then(function() {
      promise.catch(el => console.log(e.message));
    })
    .catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // Si los datos son incorrectos se lanza mensaje de verificación
      alert('Verifica tus datos');
    // ...
    });
});

// Funcionalidad del botón Google
btnGg.addEventListener('click', el => {
  // Se vacia localStorage y se le asigna el string google en el key mail
  localStorage.clear();
  localStorage.setItem('mail', 'google');
  googleLogin();
});

// Función para Login con Google
const googleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
  console.log('google');
};

// Funcionalidad del botón Facebook
btnFb.addEventListener('click', el => {
  // Se vacia localStorage y se le asigna el string facebook en el key mail
  localStorage.clear();
  localStorage.setItem('mail', 'facebook');
  facebookLogin();
});

// Función para Login con Facebook
const facebookLogin = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  authentication(provider);
};

// Se realiza la autenticación de usuario
const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    // Se obtiene la información del usuario (facebook o google)
    let user = result.user;
    localStorage.setItem('user', user);
    // Se guarda el nombre de usuario en localStorage
    let displayName = user.displayName;
    localStorage.setItem('display', displayName);
    // Se guarda la url de la foto del usuario en localStorage
    let photo = user.photoURL;
    localStorage.setItem('photo', photo);
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  });
};

/* Se utiliza el observador como condicional. Si se inicia sesión nos
redirige al home, si no se ha iniciado, permanece en el login*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let userUid = user.uid;
    localStorage.setItem('userUid', userUid);
    window.location.assign('views/home.html');
  } else {
    console.log('no se ha accesado');
  }
});