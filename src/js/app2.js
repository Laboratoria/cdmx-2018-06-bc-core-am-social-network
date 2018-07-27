

const loginGoogle= () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        console.log(result)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
    
      });
}

const loginFace= () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        console.log(result)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
    
      });
}




const ingreso = () => {
    let emailIngreso = document.getElementById("emailIngreso").value;
    let passwordIngreso = document.getElementById("passwordIngreso").value;
    //location.href = "../views/view1.html";

    firebase.auth().signInWithEmailAndPassword(emailIngreso, passwordIngreso)
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        // ...
      });
}
//verificar si existe un usuario y darle acceso
const observador = () => {
    //cuando un usuario ya esta registrado
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          alert("existe usuario registrado");
          // User is signed in. 
          aparece();
          let displayName = user.displayName;
          let email = user.email;
          //cuando el usuario ya confirmo correo
          console.log(user.emailVerified);
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          // si no existe un usuario
        } else {
          // User is signed out.
          console.log("no existe usuario registrado");
          // ...
        }
      });
}
observador();


//contenido que slo se mostrara al estar registrado
const aparece = () =>{
    let contenido = document.getElementById("contenido");
        contenido.innerHTML = `
        <h4>BIENVENIDO</h4>
        <button onclick = "cerrar()">cerrar sesión</button>
        `; 
};

const cerrar = () => {
    firebase.auth().signOut()
    .then(function(){
        alert("Saliendo...")
    })
    .catch(function(error){
        alert(error)
    })
};
