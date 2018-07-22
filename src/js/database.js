// Accedo al servicio de la base de datos
// let database = firebase.database();
const wintowTras = () =>{
  window.open('../index.html','_self');
}
let close = document.getElementById('close');
close.addEventListener('click', event => { 
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    wintowTras();
  }).catch(function(error) {
    // An error happened.
  });
});
