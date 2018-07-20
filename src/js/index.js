let app_fireBase = {};
(function(){
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCGT48tRRTrbUJvfWb3PvKZfSgISreF1S0",
    authDomain: "red-social-96a75.firebaseapp.com",
    databaseURL: "https://red-social-96a75.firebaseio.com",
    projectId: "red-social-96a75",
    storageBucket: "",
    messagingSenderId: "775319261849"
  };
  firebase.initializeApp(config);
  app_fireBase = firebase;
})()
  
/*
// Get HTML elements for Login
const email = document.getElementById('mail');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnSign = document.getElementById('btnSign');

// Email and password Login event
btnLogin.addEventListener('click', e => {
    const mail = email.value;
    const pass = password.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(mail, pass);
    console.log("mail" + mail);
    console.log("pass" + pass);
    
    promise.catch(e => console.log(e.message))
});

btnSign.addEventListener('click', e => {
    const mail = email.value;
    const pass = password.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(mail, pass);
    promise.catch(e => console.log(e.message))
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
        
    } else {
        console.log('no se ha accesado');
        
    }
})
*/
let mainApp = {};
(function(){
    let firebase = app_fireBase;
let uid = null;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
            uid = user.uid
        } else {
            uid = null;
            window.location.replace('https://github.com/gloryarz/cdmx-2018-06-bc-core-am-social-network');
        }
    });

    function logOut (){
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;

})()



// document.getElementById('logout').addEventListener('click', )