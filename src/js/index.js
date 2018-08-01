let db = initiaziling();
// Funciones auxiliares
const getUserInfo = () =>{
  firebase.auth().onAuthStateChanged((user) =>{
    if (user) {
      return user;
    }
  });
};
// Evento de autenticacíon con Gmail de Google
document.getElementById('btn-google').addEventListener('click', (event) =>{
  authGoogle();
});
// Evento de autenticaciíon con facebook
document.getElementById('btn-facebook').addEventListener('click', (event) =>{
  authFacebook();
});
//  Proveedor de credenciales de Gmail. Pasa credenciales a la autenticación
const authGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  authentificating(provider);
};
//  Proveedor de credenciales de facebook. Pasa credenciales a la autenticación
const authFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  authentificating(provider);
};
// autenticación para redes socilaes con Proveedorde credenciales.
const authentificating = (provider) =>{
  firebase.auth().signInWithPopup(provider).then(function(result) { // Genera pantalla emergente para pedir autenticación
    // Da el Token de acceso a Google. Usar para acceder a la API de Google
    let token = result.credential.accessToken;
    // Datos del usuario logeado
    let user = result.user;
    let userAuth = getUserInfo();
    let userName = userAuth.displayName;
    let userPhoto = userAuth.photoURL;
    let userEmail = userAuth.email;
// ir a HOME
  /*document.getElementById('containerUserNAme').innerHTML = `<p>${'Bienvenido'} ${'userName'}</p>
    <button class="btn btn-primary" type="button" id="buttonLogout" onclick="cerrar()">LogOut</button>`;*/
  }).catch(function(error) {
    // generar error
	  let errorCode = error.code;
    let errorMessage = error.message;
    // Este email ya esta en uso
    let email = error.email;
    console.log(email);
    // Los permisos del firebase.auth.AuthCredential ya fueron usados.
    let credential = error.credential;
    console.log(credential);
  });
};
// Ingresar por medio de correo
const ingresar = (emailU, passwordU) =>{
  firebase.auth().signInWithEmailAndPassword(emailU, passwordU) // Metodo para inicial sesión
    .then(function() {
      observadorEmail(); // Llama al observador para analizar estado de la sesion actual
    })
    .catch(function(error) {
      // Manejo de error
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
};
const observadorEmail = ()=>{
  console.log(nameU);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      userSpace();
      // Usuario logeado
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      console.log('Activo');
    } else {
      console.log('No hay usuario');
    }
  });
};
const userSpace = ()=>{
  document.getElementById('container').innerHTML = `<p>${'Bienvenido'}${' '}${nameU}</p>
  <button type="button" id="buttonLogout" onclick="cerrar()">LogOut</button>`;
};
const cerrar = () =>{
  let contenido = document.getElementById('container');
  firebase.auth().signOut()
    .then(function() {
      console.log('Cerrar sesion');
      contenido.innerHTML = '';
    })
    .catch(function() {
      console.log(error);
    });
};
document.getElementById('buttonIngresar').addEventListener('click', (event) => {
  let emailU = document.getElementById('userEmail').value;
  let passwordU = document.getElementById('userPsw').value;
  ingresar(emailU, passwordU);
});
