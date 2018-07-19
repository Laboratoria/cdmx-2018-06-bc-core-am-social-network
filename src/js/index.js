document.getElementById('session').addEventListener('click', event => {
  document.getElementById('home').style.display = 'none';
  let showSession = document.getElementById('registeredUser');
  showSession.style.display = 'block';
});

document.getElementById('newSession').addEventListener('click', event => {
  document.getElementById('home').style.display = 'none';
  let newSession = document.getElementById('newUser');
  newSession.style.display = 'block';
});

let config = {
  apiKey: 'AIzaSyBSQUIbzVSxmdELMXnGowhEkEH2QX0joEQ',
  authDomain: 'social-network-edfb3.firebaseapp.com',
  databaseURL: 'https://social-network-edfb3.firebaseio.com',
  projectId: 'social-network-edfb3',
  storageBucket: 'social-network-edfb3.appspot.com',
  messagingSenderId: '342564191947'
};

firebase.initializeApp(config);

document.getElementById('signUp').addEventListener('click', event => {
  let newEmail = document.getElementById('newEmail').value;
  let newPassword = document.getElementById('newPassword').value;

  firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert('Error! Tu correo o contraseña no pueden ser campos vacios.');
    });
});

document.getElementById('signIn').addEventListener('click', event => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert('Error! Tu correo o contraseña son incorrectos.');
    });
});

const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('usuario activo');
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      console.log(user);

      document.getElementById('content').innerHTML = 'Esto solo lo ve un usuario registrado ;)';
    } else {
    }
  });
};

observer();