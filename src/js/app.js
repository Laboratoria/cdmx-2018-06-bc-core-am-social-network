
const config = {
  apiKey: 'AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y',
  authDomain: 'social-network-5b9ef.firebaseapp.com',
  databaseURL: 'https://social-network-5b9ef.firebaseio.com',
  projectId: 'social-network-5b9ef',
  storageBucket: '',
  messagingSenderId: '1074635944561'
};
firebase.initializeApp(config);

const logoutBtn = document.getElementById('logout-btn');
logoutBtn. addEventListener('click', event=>{
  firebase.auth().signOut();
  location.href = 'index.html';
});

// Firebase database
let messageInput = document.getElementById('input-post');
let publicarBtn = document.getElementById('publicar-btn');
publicarBtn.addEventListener('click', event1=>{
  let currentUser = firebase.auth().currentUser;
  let messageValue = messageInput.value;

  const newMessagekey = firebase.database().ref().child('messages').push().key; // obteniendo una llave única para nuestros elementos de la colección messages. creo un elemento y saco esa llavve
   
  firebase.database().ref(`messages/${newMessagekey}`).set({ // usamos esa llave
    creator: currentUser.uid,
    creatorName: currentUser.displayName,
    UserEmail: currentUser.email,
    text: messageValue
  });
});


