// Get HTML elements for Login
const email = document.getElementById('mail');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnSign = document.getElementById('btnSign');
const btnSignup = document.getElementById('btnSignup');
const name = document.getElementById('name');
const btnFb = document.getElementById('btnFb');
const btnGg = document.getElementById('btnGg');

// Sign up new users
btnSign.addEventListener('click', e => {
  name.style.display = "block";
  btnLogin.style.display = "none";
  btnFb.style.display = "none";
  btnGg.style.display = "none";
  btnSign.style.display = "none";
  btnSignup.style.display = "block";
});

// Crear usuario nuevo mail, contraseña, nombre
btnSignup.addEventListener('click', e => {
  const mail = email.value;
  const pass = password.value;
  const nameValue = name.value;
  localStorage.setItem("mail", mail)

  const promise = firebase.auth().createUserWithEmailAndPassword(mail, pass);
  promise.catch(e => console.log(e.message))

  let ref = database.ref('user');
  let data = {
    name: nameValue,
    mail: mail
  }
  ref.push(data);
  setTimeout((event) => { window.location.reload();}, 2000);
});

// Login con email y password
btnLogin.addEventListener('click', e => {
  const mail = email.value;
  const pass = password.value;
  localStorage.setItem("mail", mail)
  const promise = firebase.auth().signInWithEmailAndPassword(mail, pass);
  promise.catch(e => console.log(e.message))
});

//Login with Google
btnGg.addEventListener('click', e => {

});


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.assign('views/home.html');

  } else {
    console.log('no se ha accesado');
  }
});



// Login con Facebook
btnFb.addEventListener('click', e => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    'display' : 'popup'
  });
  firebase.auth().signInWithPopup(provider)
    .then (() => {
      console.log("Login con facebook");
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje >" + error.message);
           
    })
}); 

/* fb code

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

*/