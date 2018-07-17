 (function () {
   // Initialize Firebase
   const config = {
     apiKey: "AIzaSyBJVkG4r0b5pauCPkgJ7lF8TNGwqlNE7Z0",
     authDomain: "red-social-ea5c4.firebaseapp.com",
     databaseURL: "https://red-social-ea5c4.firebaseio.com",
     projectId: "red-social-ea5c4",
     storageBucket: "red-social-ea5c4.appspot.com",
     messagingSenderId: "596516685843"
   };
   firebase.initializeApp(config);

   // Get elements
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const logIn = document.getElementById('btn-login');
   const signUp = document.getElementById('btn-signup');

   // agregar evento click al botón de log in
   logIn.addEventListener('click', e => {
     // Obtener valores de email y password
     const emailValue = email.value;
     const passwordValue = password.value;
     const auth = firebase.auth();

     // para iniciar sesión (log in)
     const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
     promise.catch(e => console.log(e.message));
   });

   //botón de registrarse (sign up)

   signUp.addEventListener('click', e => {
     const emailValue = email.value;
     const passwordValue = password.value;
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
