const registrar= () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //sie el usuario se regsitro de manera correcta se ejecutara la funcion verificar
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
        verificar()
    })
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}
const loginGoogle= () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    
      });
}

const loginFace= () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    
      });
}









//verificar si existe un usuario y darle acceso
const observador = () => {
    //cuando un usuario ya esta registrado
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("existe usuario registrado");
          // User is signed in. 
          aparece();
          var displayName = user.displayName;
          var email = user.email;
          //cuando el usuario ya confirmo correo
          console.log(user.emailVerified);
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // si no existe un usuario
        } else {
          // User is signed out.
          console.log("no existe usuario registrado");
          // ...
        }
      });
}
observador();





//verificar el correo electronico con el que se esta registrando
const verificar = () =>{
    //enviara correo para verificar
    var user = firebase.auth().currentUser;
    //usuario a quien se le mandara correo
    user.sendEmailVerification()
    .then(function() {
    //si funciona se le mandara correo
    // Email sent.
    console.log("Enviando correo..");
    }).catch(function(error) {
    // An error happened.
    console.log("error");
    });

}

