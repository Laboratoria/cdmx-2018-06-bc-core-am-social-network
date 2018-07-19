 louncher = () => {
   // Initialize Firebase
   let config = {
     apiKey: "AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y",
     authDomain: "social-network-5b9ef.firebaseapp.com",
     databaseURL: "https://social-network-5b9ef.firebaseio.com",
     projectId: "social-network-5b9ef",
     storageBucket: "",
     messagingSenderId: "1074635944561"
   };
   //con el método firebase.initializeApp se aplica la configuración que está nuestra variable config
   firebase.initializeApp(config);


   // Getting elements (obteniendo elementos globales: inputs y botones)
   let mail = document.getElementById('email');
   let password = document.getElementById('password');
   const logIn = document.getElementById('log-in');
   const signUp = document.getElementById('sign-up');
   let username = document.getElementById('first_name');
   let lastname = document.getElementById('last_name');

  //botón de registrarse (sign up)

  signUp.addEventListener('click', e => {
    if (mail.value === "" || mail.value === " " || password.value === "" || password.value === " ") {
     alert("No ingresaste un correo o una contraseña válida")
   } else {
    let emailValue = email.value;
    let passwordValue = password.value;
    const auth = firebase.auth();

    // para registrarse ( sign in)
    const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue);
    promise.catch(e => console.log(e.message));
   }
  });

   // agregar evento click al botón de log in (iniciar sesión)
   logIn.addEventListener('click', e => {
     // condicionando el flujo de inicio de sesión 
     if (mail.value === "" || mail.value === " " || password.value === "" || password.value === " ") {
       alert("No ingresaste un correo o una contraseña válida")
     } else {
      let emailValue = mail.value;
      let passwordValue = password.value;
      const auth = firebase.auth();
      let usuario = {
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
     }
     
   });

 

   firebase.auth().onAuthStateChanged(firebaseUser => {
     if (firebaseUser) {
       console.log(firebaseUser);
     } else {
       console.log('not logged in ')
     }
   })
 }
 louncher();
