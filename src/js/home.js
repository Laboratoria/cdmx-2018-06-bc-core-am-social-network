(function() {
  // Get elements
  const btnLogout = document.getElementById('btn-logout');
  // Get a reference to the database service
  let database = firebase.database();

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
    let id = user.uid;
    userConect = database.ref('users/' + id);
    addUser(user.displayName, user.email);
  });

<<<<<<< HEAD
  function agregarUser(uid, name, email) {
    let user = firebase.auth().currentUser;

    var conectados = userConect.push({
      uid: uid,
      name: name,
      email: email
    });
  }
=======
  addUser = (name, email) => {
    let conect = userConect.push({
      name: name,
      email: email
    });
  };
}());
>>>>>>> cd36d52b5e1f79137d1b8941c7bcc8ee162a0a06

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

<<<<<<< HEAD
=======
btnShare.addEventListener('click', event => {
  const currentUser = firebase.auth().currentUser;
  const textInPost = postText.value;
  if (textInPost === '' || textInPost === ' ') {
    alert('No ingresaste texto');
    console.log('vacio');
  } else {
    console.log('texto');
    postText.value = '';
    // Create a unique key for messages collection
    const newPostKey = firebase.database().ref().child('posts').push().key;
    firebase.database().ref(`posts/${newPostKey}`).set({
      creator: currentUser.uid,
      creatorName: currentUser.displayName,
      text: textInPost
    });
  };
  // window.social.displayPost(textInPost);
});
>>>>>>> cd36d52b5e1f79137d1b8941c7bcc8ee162a0a06
