// // Registro Usuarios Nuevos
// const userName = document.getElementById('userName');
// const email = document.getElementById('txtEmailSignUp');
// const password = document.getElementById('txtPasswordSignUp');
// const btnSignup = document.getElementById('btnSignup');

btnSignup.addEventListener('click', e => {
  console.log('btnSignup');
  const email = document.getElementById('txtEmailSignUp').value;
  const password = document.getElementById('txtPasswordSignUp').value;
  const userName = document.getElementById('userName').value;
  localStorage.setItem('txtEmailSignUp', mail);
  window.location.href = 'views/wall.html';
  alert('Ingresa tus Datos');


  firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      verificar();
    })
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica datos');
      // ...
    });
});

// Ingreso de Usiario y contraseña
const email1 = document.getElementById('intText');
const password1 = document.getElementById('intPass');
// const btnentrar = document.getElementById('btnentar');

btnentrar.addEventListener('click', e => {
  const email1 = intText.value;
  const password1 = intPass.value;
  localStorage.setItem('intText', email1);
  firebase.auth().signInWithEmailAndPassword(email1, password1)
    .then(function () {
      promise.catch(e => console.log(e.message));
      window.location.href = 'views/wall.html';
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica tus datos');
      // ...
    });
});

function verificar() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
  }).catch(function (error) {
    // An error happened.
  });
}

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
