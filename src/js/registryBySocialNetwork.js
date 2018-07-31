// autenticación para redes socilaes con Proveedorde credenciales.
const authentificating = (provider) =>{
  firebase.auth().signInWithPopup(provider).then(function(result) { // Genera pantalla emergente para pedir autenticación
    // Da el Token de acceso a Google. Usar para acceder a la API de Google
    let token = result.credential.accessToken;
    // Datos del usuario logeado
    let user = result.user;
    // Botón dinámico de LogOut
    // Aqui colocar el if o la redirección a la página.
    window.location.assign('home.html');
    document.getElementById('container').innerHTML = `<p>${'Bienvenido'}${' '}${'usuario'}</p>
    <button class="btn btn-primary" type="button" id="buttonLogout" onclick="cerrar()">LogOut</button>`;
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

// Evento de autenticaciíon con Gmail de Google
document.getElementById('btn-google').addEventListener('click', (event) =>{
  authGoogle();
});
// Evento de autenticaciíon con facebook
document.getElementById('btn-facebook').addEventListener('click', (event) =>{
  authFacebook();
});
