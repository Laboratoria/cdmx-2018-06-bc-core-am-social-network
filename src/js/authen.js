// Accedo al serviciode autentifacion
let authen = firebase.auth();

let buton = document.getElementById('buton');

buton.addEventListener('click', event => {
    let user = new firebase.auth.GoogleAuthProvider();
    authen.signInWithPopup(user);
})