(function (){ 
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC9JZpmKLPBvfy3FN6n-HeHJ8g1ncj_xFM",
    authDomain: "red-social-98290.firebaseapp.com",
    databaseURL: "https://red-social-98290.firebaseio.com",
    projectId: "red-social-98290",
    storageBucket: "red-social-98290.appspot.com",
    messagingSenderId: "186702904423"
  };
  firebase.initializeApp(config);

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  const logout = document.getElementById('logout');

// Agregar evento para el botón de inicio de sesión
  login.addEventListener('click', event => {
// Obtenemos valor de email y password
    const emailValue = email.value;
    const passwordValue = password.value;
    const auth = firebase.auth();
// Para iniciar sesión 
    const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
    promise.catch(event => console.log(event.message));

  });

// Añadiendo el evento del botón de registrarse

  signup.addEventListener('click', event => {
    const emailValue = email.value;
    const passwordValue = password.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue);
    promise.catch(event => console.log(event.message));
  });

   logout.addEventListener('click', event => {
     firebase.auth().signOut();
   }); 

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
    } else {
      console.log('not logged in');
      logout.classList.add('hide');
    } 
  })
}());

