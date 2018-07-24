
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
  // .then(() =>{
  // alert(' BYE!');
  location.href = 'index.html';
//     })
//     .catch();
});

// let publicarBtn = document.getElementById('publicar-btn');
// publicarBtn.addEventListener('click', event1=>{
//   console.log('diste un click');
//   // publicacion = document.getElementById('input-publicacion').value;
//   // localStorage.setItem('key', JSON.stringify(publicacion));
// });