const color = document.getElementById('color');

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
