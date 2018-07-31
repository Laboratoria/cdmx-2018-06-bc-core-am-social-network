//import firebase from 'firebase';
//import 'firebase/firestore';
 let DB = initiaziling();
 // let auth = initiaziling().[1];
// CRUD para registrar con Correo
const cleanEmailRegister = () =>{ // Limpiar cajas de form de registro
  document.getElementById('uEmail').value = '';
  document.getElementById('uPsw').value = '';
  document.getElementById('uName').value = '';
  document.getElementById('name').value = '';
  document.getElementById('birthday').value = '';
  document.getElementById('country').value = '';
};
// Funciones CRUD
const createUserByEmailinCloud = () =>{
  console.log("guarda info");
  // Traer elementos del DOM
  let userEmail = document.getElementById('uEmail').value;
  let userPassword = document.getElementById('uPsw').value;
  let userName = document.getElementById('uName').value;
  let userCompleteName = document.getElementById('name').value;
  let userBirth = document.getElementById('birthday').value;
  let usercontry = document.getElementById('country').value;
  console.log(usercontry);
  DB.collection('diabeTipsUsers').add({
    userEmail: userEmail,
    userPassword: userPassword,
    userName: userName,
    userCompleteName: userCompleteName,
    userBirth: userBirth,
    usercontry: usercontry
  })
    .then(function(docRef) {
      console.log('Registro de perfil de usuario bajo ID: ', docRef.id);
      // Limpiar los espacios del formulario para un nuevo registro
      alert('Tu perfil esta completo :D');
    		cleanEmailRegister();
    })
    .catch(function(error) {
      console.error('Error: No se concreto el registro', error);
    });
};
// Verificación de autenticación con correo
const verificarEmail = ()=>{
  let vefificarU = firebase.auth().currentUser;
  vefificarU.sendEmailVerification().then(function() {
    console.log('enviando email');
  }).catch(function() {
    console.log(error);
  });
};
// Registro por correo
const registrar = (email, password) =>{
  console.log("Se esta registrando");
  firebase.auth().createUserWithEmailAndPassword(email, password) // Crea usuarios a apartir del correo
    .then(function() {
      console.log("Va a verificar");
      verificarEmail(); // Verifica si existe o no y si esta activo o no
      console.log("ya registro");
      createUserByEmailinCloud();
    })
    .catch(function(error) {
      // Manejo de errores
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
// Evento de registro con correo
document.getElementById('buttonRegistrar').addEventListener('click', (event) => {
  console.log('Entra al registro');
  let email = document.getElementById('uEmail').value;
  let password = document.getElementById('uPsw').value;
  registrar(email, password);
});
