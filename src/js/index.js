// Initialize Firebase
var config = {
    apiKey: "AIzaSyCGT48tRRTrbUJvfWb3PvKZfSgISreF1S0",
    authDomain: "red-social-96a75.firebaseapp.com",
    databaseURL: "https://red-social-96a75.firebaseio.com",
    projectId: "red-social-96a75",
    storageBucket: "red-social-96a75.appspot.com",
    messagingSenderId: "775319261849"
  };
  firebase.initializeApp(config);
  let database = firebase.database();
  
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
  
  
  btnSignup.addEventListener('click', e => {
    const mail = email.value;
    const pass = password.value;
    const nameValue = name.value;
  
    let ref = database.ref('user');
    let data = {
      name: nameValue,
      mail: mail
    }
    ref.push(data);
    
    const promise = firebase.auth().createUserWithEmailAndPassword(mail, pass);
    window.location.reload();
    promise.catch(e => console.log(e.message))
  });
  
  // Email and password Login 
  btnLogin.addEventListener('click', e => {
      const mail = email.value;
      const pass = password.value;
  
      const promise = firebase.auth().signInWithEmailAndPassword(mail, pass);
      console.log("mail" + mail);
      console.log("pass" + pass);
      
      promise.catch(e => console.log(e.message))
  });
  
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
          console.log(firebaseUser);
          
      } else {
          console.log('no se ha accesado');
          
      }
  })
  
  