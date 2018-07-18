let comment = document.getElementById('entrada');

// Función de Compartir comment:
const share = () => {
  let comentario = comment.value;
  const getCommits = document.getElementById('comentarios');
  // EN algún lugar le tengo que insertar la información comentario
  // `<textarea id="demo" cols="20" rows="3" class="form-control" readonly="true"></textarea>`
};
// Inicializar Firebase
const config = {
  apiKey: 'AIzaSyCt9yjfxwLkam9k--FRqUyqn-nw2pOgrdY',
  authDomain: 'diabetessocialmedia.firebaseapp.com',
  databaseURL: 'https://diabetessocialmedia.firebaseio.com',
  projectId: 'diabetessocialmedia',
  storageBucket: 'diabetessocialmedia.appspot.com',
  messagingSenderId: '1728202919'
};
firebase.initializeApp(config);
//
const authentificationsUsers = document.getElementById('button');

const authentificationsUsers = document.getElementById('button');
authentificationsUsers.addEventListener('click', (event) =>{
  authGoogle();
});
authGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentificating(provider);
};

authentificating = (provider) =>{
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // Da el Token de acceso a Google. Usar para acceder a la API de Google
    var token = result.credential.accessToken;
    // Datos del usuario logeado
    var user = result.user;
    console.log(result);
  }).catch(function(error) {
  // enerar error
    var errorCode = error.code;
    var errorMessage = error.message;
    // Este email ya esta en uso
    var email = error.email;
    console.log(email);
    // Los permisos del firebase.auth.AuthCredential ya fueron usados.
    var credential = error.credential;
    console.log(credential);
  });
};

const authEmail = document.getElementById('buttonEmail');
const userEmail = document.getElementById('email').value;
const userPsw = document.getElementById('psw').value;

authEmail.addEventListener('click', (event) =>{
  authentificationsUsersByEmail();
});
authentificationsUsersByEmail = () =>{
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPsw)
    .then(function() {
      console.log(userEmail);
      sigInByEmail(userEmail, userPsw);
    })
    .catch(function(error) {
      // Manejo de errores
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};
sigInByEmail = (userEmail, userPsw) => {
  firebase.auth().signInWithEmailAndPassword(userEmail, userPsw).catch(function(error) {
  // Manejo de error
    var errorCode = error.code;
    var errorMessage = error.message;
  // ...
  });
};
/* const userPrintSpace = document.getElementById('obj');
let database = firebase.database().ref().child('obj');
database.on('value', snap => console.log(snap.val()));*/
