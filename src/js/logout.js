const btnLogOut = document.getElementById('btnLogOut');

btnLogOut.addEventListener('click', event => {
  firebase.auth().signOut();
  window.location.href = '../index.html';
});