(function() {
  // Get elements
  const btnLogout = document.getElementById('btn-logout');
  // Get a reference to the database service
  var database = firebase.database();

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
    userConect = database.ref('data');
    agregarUser(user.uid, user.displayName, user.email);
  });

  function agregarUser(uid, name, email) {
    let user = firebase.auth().currentUser;

    var conectados = userConect.push({
      uid: uid,
      name: name,
      email: email
    });
  }

  const postText = document.getElementById('post-entry');
  const btnShare = document.getElementById('new-post');

  btnShare.addEventListener('click', event => {
    const currentUser = firebase.auth().currentUser;
    const textInPost = postText.value;
    // Create a unique key for messages collection
    const newPostKey = firebase.database().ref().child('posts').push().key;
    firebase.database().ref(`posts/${newPostKey}`).set({
      creator: currentUser.uid,
      creatorName: currentUser.displayName,
      text: textInPost
    });
    window.social.displayPost(textInPost);
  });
}());

