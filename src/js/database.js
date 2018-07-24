// // Accedo al servicio de la base de datos
// // let database = firebase.database();

let close = document.getElementById('close');
close.addEventListener('click', event => { 
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.open('../index.html','_self');
  }).catch(function(error) {
    // An error happened.
  });
});
