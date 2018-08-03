// Elementos HTML
const btnLogout = document.getElementById('btnLogout');

// Función para salir
btnLogout.addEventListener('click', el => {
  firebase.auth().signOut();
  window.location.assign('../index.html');
});
