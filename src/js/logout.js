const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    window.location.assign('../index.html');
  });
