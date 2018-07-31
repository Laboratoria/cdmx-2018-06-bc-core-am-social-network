const config = {
  apiKey: 'AIzaSyCjN9x4Q4B8Nx5xf1ZoKLpWn4mTPiuuC3c',
  authDomain: 'red-social-19985.firebaseapp.com',
  databaseURL: 'https://red-social-19985.firebaseio.com',
  projectId: 'red-social-19985',
  storageBucket: 'red-social-19985.appspot.com',
  messagingSenderId: '169924096887'
};   
firebase.initializeApp(config);
const database = firebase.database();


let namePost = document.getElementById('namePost');
let messagePost = document.getElementById('messagePost');
let btnPost = document.getElementById('btnPost');
let chatUl = document.getElementById('chat');
let btnLogOut = document.getElementById('btnLogout'); 

btnPost.addEventListener('click', function() {
  let nombre = namePost.value;
  let mensaje = messagePost.value;
        
  firebase.database().ref('posts').push({
    name: nombre,
    message: mensaje,
  });
});

btnLogOut.addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
    window.location.href = '../index.html';
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
});

firebase.database().ref("posts").on("value", snapshot => {//objeto que contiene la data
  let html ="";  
  snapshot.forEach(function (e) {
      let element = e.val();
      let nombre = element.name;
      let mensaje = element.message;  
      html += `
        "<li> <b>${nombre}</b>: ${mensaje}</li>" +
        '<button type="button" class="btnDelete borrar" data-message= "' + key + '">' +
        <span class="glyphicon glyphicon-trash"></span>
        </button>
         `;
    });
    chatUl.innerHTML = html;
    if( chatUl != ""){
        let deleteElements = document.getElementsByClassName("borrar");
        for (let i=0, i < deleteElements.length, i++){
            deleteElements[i].addEventListener("click" deleteMessage, false)
        }
    }
  });

  function deleteMessage = () => {
      let keyMessage = this.getAttribute("")
  }
  //reset()//Elimina el contenido de los input sin actualizar la página.
