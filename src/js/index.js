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
  
         
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
    verificar();
  })
    .catch(function(error) {
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
    .then(function() {
      promise.catch(e => console.log(e.message));
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
}); 

function verificar() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
}

// login Goole
let provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function() {
  firebase.auth()
    .signInWithPopup(provider)
    .then(function(result) {
    // console.log(result.user);
      window.location.href = 'views/wall.html';
      $('#login').hide();
    });
});

// Login FaceBook
var providerf = new firebase.auth.FacebookAuthProvider();
$('#face').click(function() {
  firebase.auth()
    .signInWithPopup(providerf)
    .then(function(result) {
    // console.log(result.user);
      window.location.href = 'views/wall.html';
      $('#face').hide();
      $('#root').append('<img src=\'' + result.user.photoURL + '\'/>');
    });
});

// Login GitHub
var providerg = new firebase.auth.GithubAuthProvider();
$('#gith').click(function() {
  firebase.auth()
    .signInWithPopup(providerg)
    .then(function(result) {
      window.location.href = 'views/wall.html';
    // console.log(result.user);
    /* guardaDatos(result.user);
    $('#face').hide();
    $('#root').append("<img src='"+result.user.photoURL+"'/>")*/
    });
});


// esta funcion guarda datos automaticamente
function guardaDatos(user) {
  var usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL
  };
  firebase.database().ref('runeat/' + user.uid)
    .set(usuario);
}

// leyendo de la BD
firebase.database().ref('runeat')
  .on('child_added', function(s) {
    let user = s.val();
    $('#root').append('<img src=\'' + user.foto + '\'/>');
  });
const Siguiente = () => {
  location.href = ('views/wall.html');
};