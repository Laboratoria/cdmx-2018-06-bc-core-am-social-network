 (function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y",
    authDomain: "social-network-5b9ef.firebaseapp.com",
    databaseURL: "https://social-network-5b9ef.firebaseio.com",
    projectId: "social-network-5b9ef",
    storageBucket: "",
    messagingSenderId: "1074635944561"
  };
  firebase.initializeApp(config);


   // Getting elements
   let mail = document.getElementById('email');
   let password = document.getElementById('password');
   const logIn = document.getElementById('log-in');
   const signUp = document.getElementById('sign-up');
   const username = document.getElementById('first_name');
   const lastname = document.getElementById('last_name');


   // agregar evento click al botón de log in
   logIn.addEventListener('click', e => {
    event.preventDefault();
     // Obtener valores de email y password
     let emailValue = mail.value;
     let passwordValue = password.value;
     const auth = firebase.auth();
     let usuario ={
      name: username.value,
      apellido: lastname.value,
      email: email.value
     }
     localStorage.setItem("key", JSON.stringify(usuario));
    
// para iniciar sesión (log in)
window.homeNetwork.mostrar(usuario);
     const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
     promise.catch(e => console.log(e.message));
    //  datosUsuario(emailValue, passwordValue);
   });
  
   //botón de registrarse (sign up)

   signUp.addEventListener('click', e => {
    // event.preventDefault();

     let emailValue = email.value;
     let passwordValue = password.value;
     const auth = firebase.auth();

     // para registrarse ( sign in)
     const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue);
     promise.catch(e => console.log(e.message));

   });

   firebase.auth().onAuthStateChanged(firebaseUser => {
     if (firebaseUser) {
       console.log(firebaseUser);
     } else {
       console.log('not logged in ')
     }
   })
 }());
