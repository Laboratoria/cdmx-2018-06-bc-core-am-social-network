const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("inputText");
const input = document.getElementById("item");

let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[];

localStorage.setItem("items", JSON.stringify("userPublications"));
const data = JSON.parse(localStorage.getItem("items"));
const liMaker = (text) =>{
    const li = document.createElement("li");
    li.textContent = text ;
    ul.appendChild(li);
}
form.addEventListener("submit", function (h){
h.preventDefault();
itemsArray.push(input.value);
localStorage.setItem("items", JSON.stringify(itemsArray));
liMaker(input.value);
input.value = "";
});
data.forEach(item => {
liMaker(item);
});
inputText.addEventListener("click", function(){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
});

(function() {
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAtSswEBoMSKEmTCLYqtyshjlRbD8Ij5RU",
    authDomain: "red-social-ux.firebaseapp.com",
    databaseURL: "https://red-social-ux.firebaseio.com",
    projectId: "red-social-ux",
    storageBucket: "red-social-ux.appspot.com",
    messagingSenderId: "517777747889"
};
firebase.initializeApp(config);
console.log('estas dentro del firebase');    
// Introducir los metodos del DOM
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById(`btnSignUp`);
const btnLogout = document.getElementById('btnLogout');

    // Se agrega el evento click para el boton LogIn
    btnLogin.addEventListener( 'click', e => {     
    //Obteniendo e-mail y password
    const email = txtEmail.value;
    const passw = txtPassword.value;
    const auth = firebase.auth();
    // Se entra con Sign In
    const promise = auth.signInWithEmailAndPassword(email, passw);
    promise.catch(e => console.log(e.message));

});
    // Se agrega el evento click para el boton SignUp
    btnSignUp.addEventListener('click', e =>{
    //Creando usuarios con el btnSignUp
    const email = txtEmail.value;
    const passw = txtPassword.value;
    const auth = firebase.auth();
    // Se entra con Sign In
    const promise = auth.createUserWithEmailAndPassword(email, passw);
    promise.catch(e => console.log(e.message));
    btnLogout.addEventListener('click', e =>{
     firebase.auth().signOut();   
    });

// Se identifica al usuario y se deja entrar a la firebase console (listener de autentificacion en tiempo real)
        firebase.auth().onAuthStateChanged( firebaseUser =>{
        if(firebaseUser){
        console.log(firebaseUser); 
        btnLogout.classList.remove('hide');   
        }else{
        console.log('Not logged in'); 
        btnLogout.classList.add('hide');   
        }
        });
    });




}());
