(function() {
  // Get elements
  const btnLogout = document.getElementById('btn-logout');

  // Add logout event
  btnLogout.addEventListener('click', event => {
    firebase.auth().signOut();
    window.location.assign('../index.html');
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
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