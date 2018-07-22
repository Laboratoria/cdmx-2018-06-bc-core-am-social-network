(function() {
  // Get elements
  const btnLogout = document.getElementById('btn-logout');

  // Add logout event
  btnLogout.addEventListener('click', event => {
    firebase.auth().signOut();
    window.location.assign('../index.html');
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    // if (firebaseUser) {
    console.log(firebaseUser);
    let user = firebase.auth().currentUser;
    if (user !== null) {
      // let emailId = user.email;
      user.updateProfile({
        displayName: user.displayName
      });
      document.getElementById('user-paragraph').innerHTML = `Bienvenidx ${user.displayName}`;
    } else {
      console.log('not logged in');
    }
  });
}());

const postText = document.getElementById('post-entry');
const btnShare = document.getElementById('new-post');

btnShare.addEventListener('click', event => {
  let textInPost = postText.value;
  window.social.displayPost(textInPost);
});