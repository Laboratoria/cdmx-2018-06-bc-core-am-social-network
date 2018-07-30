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
let messagePost = document.getElementById('messagePost')
let btnPost = document.getElementById('btnPost');
let chatUl = document.getElementById('chat');

btnPost.addEventListener('click', function() {
  let nombre = namePost.value;
  let mensaje = messagePost.value;
        
  firebase.database().ref('posts').push({
    name: nombre,
    message: mensaje,
  });
});
firebase.database().ref('posts').on('value', snapshot => { // objeto que contiene la data
  let html ='';  
  snapshot.forEach(function(event) {
    let element = event.val();
    let nombre = element.name;
    let mensaje = element.message;  
    html += `
          <li> <b>${nombre}</b>${mensaje}</li>
          `;
  });
  chatUl.innerHTML = html;
});