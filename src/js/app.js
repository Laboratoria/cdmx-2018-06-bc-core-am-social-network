const config = {
    apiKey: 'AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y',
    authDomain: 'social-network-5b9ef.firebaseapp.com',
    databaseURL: 'https://social-network-5b9ef.firebaseio.com',
    projectId: 'social-network-5b9ef',
    storageBucket: '',
    messagingSenderId: '1074635944561'
};
firebase.initializeApp(config);

// obteniendo imputs y botones globales
let card = document.getElementById('card');
let messageInput = document.getElementById('input-post');
let publicarBtn = document.getElementById('publicar-btn');
let deleteBtn = document.getElementsByClassName('delete-message-btn')[0];
// obteniendo ícono donde daremos click y contenedor 
let profileIcon = document.getElementById('profile-info');
let profileContainer = document.getElementById('profile-container');
let newMessagekey;


// botón de publicar para guardar información en la base de datos
publicarBtn.addEventListener('click', event => {
    let currentUser = firebase.auth().currentUser; // obtener al usuario con el propiedad .currentUser
    let messageValue = messageInput.value; // obtener el mensaje escrito 
    newMessagekey = firebase.database().ref().child('posts').push().key; // En ref se pone la ruta para encontrar los mensajes, luego ¿dónde los vamos a guardar? obteniendo una llave única para nuestros elementos de la colección messages. creo un elemento y saco esa llavve 
    firebase.database().ref(`posts/${newMessagekey}`).set({
        creator: currentUser.uid,
        creatorName: currentUser.displayName,
        UserEmail: currentUser.email,
        text: messageValue
    });
});

window.onload = () => {
    // observador estamos o no logueados
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // estamos logueados
            pintarUsuario(user);
            obtenerUsuarioDatabase(user);
        } else {
            console.log('not logged in ');
        }
    });
    // crear publicación por medio del DOM con template string
    firebase.database().ref('posts')
        .on('child_added', (newMessage) => {
            card.innerHTML +=
                `<div class="card blue lighten-3">
            <p>${newMessage.val().creatorName}:</p>
            <p> ${newMessage.val().text}</p>
            <div class ="card-action">
            <button class = "edit-message-btn">Editar</button>
           <button class = "delete-message-btn">Borrar</button>
         <i class=" small material-icons right">favorite</i>  
         </div>
        </div>`;
        });
    firebase.database().ref('posts')
        .on('child_removed', (newMessage) => {
            console.log('has borrado correctamente');
        });
};

// deleteBtn.addEventListener('click', eliminarPostBD);
// const eliminarPostBD = ()=>{
//   firebase.database().ref('/posts/' + newMessagekey).remove();
// };

const obtenerUsuarioDatabase = (user) => {
    firebase.database().ref('users').set({
        username: user.displayName,
        email: user.email,
        profPicture: user.photoURL
    });
};

const pintarUsuario = (user) => {
    firebase.database().ref('users')
        .on('child_added', (newUser) => {
            profileContainer.innerHTML =
                `<div class="container center">
       <div class="row">
       <p>Bienvenid@ ${newUser.val().username}</p>
       <p>e-mail: ${newUser.val().email}</p>
       </div>
       </div>`;
        });
};
profileIcon.addEventListener('click', pintarUsuario);


// cambiar de página a index.html
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', event => {
    firebase.auth().signOut();
    location.href = 'index.html';
});


//   const deleteMessagebtn = document.getElementsByTagName('button');

//   deleteMessagebtn.addEventListener('click', deletingMessage);


//   let borrar = firebase.database().ref().child('messages').push().key;
//   let refMessage ;
//   console.log(borrar);
//   const deletingMessage = () => {
//     let refMensaje = refMessage.child(borrar);
//     refMensaje.remove();
//   };
//   console.log(deletingMessage);

// edit icon
//Agreagar el boton de editar desde java
let editIconUI = document.createElement("span");
editIconUI.class = `edit-message`;
editIconUI.innerHTML = ` ✎`;
editIconUI.setAttribute("userid", key);
//Crear un editIconUI span element, después darale un evento click con una función callback editButtonClicked().
editIconUI.addEventListener("click", editButtonClicked)
    // Append despues li.innerHTML = value.name
$li.append(editIconUI);

// Obntener el mensaje modificado de usuario
document.getElementById('edit-user-module').style.display = "block";

//Crea el path donde se selecciona la información del usuario por la id de database
const userRef = dbRef.child('users/' + e.target.getAttribute("userid"));
//Remplaza la información que ingreso el usuario
const editUserInputsUI = document.querySelectorAll(".edit-user-input");

//Se define un evento llamado value en la función llada userRef, el segundo argumentoen ese evento es una función call back 
//con el parametro snap el cual tendrá la información del usuario actual
userRef.on("value", snap => {
    for (var i = 0, len = editUserInputsUI.length; i < len; i++) {
        var key = editUserInputsUI[i].getAttribute("data-key");
        editUserInputsUI[i].value = snap.val()[key];
    }
});
//Dentro de ese evento callback, recorrera ese arrayy obtendra el valor de un atributo data-keyen cada iteración y lo guardara´
//en un variable key para poder asignarle un  valor de snap.value()[key] al campo de mensaje.

//guardar los datos modificados del mensaje por usuario
const saveBtn = document.querySelector("#edit-message-btn");
saveBtn.addEventListener("click", saveUserBtnClicked)

const messageID = document.querySelector(".edit-messageid").value;
//se crea una let vacia para almacenar lo que introduzca el usuario
let editedmessageObject = {}
    //obtener todo lo que ingreso el usuario en un array
const editMessageInputsUI = document.querySelectorAll(".edit-message-input");
//creamos un uevo loop para que iterar en el nuevo array creado y obtener los nuevos valores con el atributo data-key
//guardar los valores en una let key
editMessageInputsUI.forEach(function(textField) {
    let key = textField.getAttribute("data-key");
    let value = textField.value;
    editedMessageObject[textField.getAttribute("data-key")] = textField.value
});
//Despues usamos el método update para actualizar la información que cambio en el comenario
userRef.update("editMessage", function() {
    console.log("Message has been updated");
});