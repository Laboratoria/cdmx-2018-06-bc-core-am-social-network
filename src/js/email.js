/*
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
registrar = () =>{
  let email = document.getElementById('userEmail').value;
  let password = document.getElementById('userPsw').value;
  let userName = document.getElementById('username').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
    let validEmail = emailRegex.test(email);
    if (validEmail){
    verificarEmail();
  }else{
    console.log(error);
  }
  })
  .catch(function(error) {
  // Manejo de errores
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  });
}
ingresar = () =>{
  let emailU = document.getElementById('uEmail').value;
  let passwordU = document.getElementById('uPsw').value;
  firebase.auth().signInWithEmailAndPassword(emailU, passwordU)
  .catch(function(error) {
  // Manejo de error
  var errorCode = error.code; console.log(errorCode);
  var errorMessage = error.message; console.log(errorMessage);
  // ...
});
}

observadorEmail = ()=>{
  let nameU = document.getElementById('uName').value;
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userSpace(nameU);
    // Usuario logeado
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log("Activo");
  } else {
    console.log("No hay usuario");
  }
});
}
observadorEmail();

userSpace =(user)=>{
  let nameU = user;
  let contenido = document.getElementById('container');
  contenido.innerHTML = `<p>${'Bienvenido'}${' '}${nameU}</p>
  <button type="button" id="buttonLogout" onclick="cerrar()">LogOut</button>`;
}
cerrar = () =>{
  let contenido = document.getElementById('container');
  firebase.auth().signOut()
  .then(function(){
    console.log("Cerrar sesion");
    contenido.innerHTML = '';
  })
  .catch(function(){
    console.log(error);
  })
}

verificarEmail = ()=>{
  let vefificarU = firebase.auth().currentUser;
  vefificarU.sendEmailVerification().then(function(){
    console.log("enviando email");
  }).catch(function(){
    console.log(error);
  });
}
*/
