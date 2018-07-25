$singUp.on('click', function() {
  const name = $newUser.val();
  const apellido = $lastName.val();
  const correo = $newMail.val();
  const password = $newPassword.val();
  const registro = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Mensaje en consola si existe error de registro
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
});
