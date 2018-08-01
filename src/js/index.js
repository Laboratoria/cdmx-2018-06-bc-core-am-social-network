
// verificar correo
const verificar = () => {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
};

// Observador
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let usuarioAct = user.usuarioAct;
    console.log('usuario activo');
    localStorage.setItem('usuarioAct', usuarioAct);
    window.location.href = 'views/wall.html';
    // User is signed in.
  } else {
    console.log('No hay usuario activo');
      
    // No user is signed in.
  }
});


// login
window.userRegister = {

  loginGoogle: () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ('../views/wall.html');
      })
        .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },


  loginFacebook: () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ('../views/wall.html');
      })
        .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },

  loginGitHub: () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('repo');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ('../views/wall.html');
      })
        .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },
};
