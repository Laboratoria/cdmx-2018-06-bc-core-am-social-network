//login
window.userRegister = {

loginGoogle: () => {

  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(result => {
     location.href = ("../src/views/wall.html");
   })
    .catch (e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },


loginFacebook: () => {

if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ("../src/views/wall.html");
      })
      .catch (e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },

loginGitHub: () => {
if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    firebase.auth().signInWithPopup(provider).then(result => {
      location.href = ("../src/views/wall.html");
    })
    .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },
};