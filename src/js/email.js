let registerButton = document.getElementById('buttonRegistrar');
registerButton.addEventListener('click', (event)=>{
  registrar();
});

registrar = () =>{
  let email = document.getElementById('userEmail').value;
  let password = document.getElementById('userPsw').value;
  let userName = document.getElementById('username').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
    console.log("Creando usuario");
    verificarEmail();
  })
  .catch(function(error) {
  // Manejo de erroreso
  console.log("algo fallo");
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  });
}
verificarEmail = ()=>{
  let vefificarU = firebase.auth().currentUser;
  vefificarU.sendEmailVerification().then(function(){
    console.log("enviando email");
  }).catch(function(){
    console.log(error);
  });
}
