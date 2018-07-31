// Registro Usuarios Nuevos

const btnSignUpModal = document.getElementById('btnSignUpModal');


const registrar = () =>{
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // cons t userName = document.getElementById('userName').value;
  localStorage.setItem('email', email);
 // alert('Ingresa tus Datos');

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
    verificar();
    console.log(verificar);
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // alert('Verifica datos');
    // ...
  });
};
btnSignUpModal.addEventListener('click', registrar);

// Ingreso de Usuario y contraseña
const btnentrar = document.getElementById('btnentrar');


const entrar = () => {
  const email1 = document.getElementById('email1').value;
  const password1 = document.getElementById('password1').value;
  localStorage.setItem('email1', email1);
  firebase.auth().signInWithEmailAndPassword(email1, password1)
    .then(function() {
      // promise.catch(console.log(e.message));
      window.location.href = 'views/wall.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica tus datos');
      // ...
    });
};
btnentrar.addEventListener('click', entrar);

// verificar correo
const verificar = () => {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
};

// Observador
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let usuarioAct = user.usuarioAct;
    console.log('usuario activo');
    localStorage.setItem('usuarioAct', usuarioAct);
    window.location.href = 'views/wall.html';
    // User is signed in.
  } else {
    console.log('No hay usuario activo');
      
    // No user is signed in.
  }
});


// login
window.userRegister = {

  loginGoogle: () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ('../views/wall.html');
      })
        .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },


  loginFacebook: () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ('../views/wall.html');
      })
        .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },

  loginGitHub: () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('repo');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ('../views/wall.html');
      })
        .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },
};
