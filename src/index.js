function registrar(){
    console.log('diste un click');
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('contrasena').value;
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(function() {
        verificar()
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        
        
      });
    
}

function ingreso(){
    let email2 = document.getElementById('email2').value;
    let contrasena2 = document.getElementById('contrasena2').value;
    firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        
        
      });
      
}
function observador (){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('Existe usuario activo');
            aparece(user);
          // User is signed in.
          var displayName = user.displayName;

          var email = user.email;

          var emailVerified = user.emailVerified;
          console.log('*********************');
          console.log(user.emailVerified);
          console.log('*********************');

          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log('no existe usuario activo');
          
        }
      });      
}
observador();
function aparece(user){
    let userr = user;
    let contenido = document.getElementById('contenido2');
    if (user.emailVerified) {
        contenido.innerHTML = `
        <p>Bienvenido</p>`;    
    }

}
function verificar() {
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('Enviando correo...');
  
}).catch(function(error) {
  // An error happened.
  console.log(error);
  
});
    
}