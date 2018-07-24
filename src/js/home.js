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
      document.getElementById('profile-image').innerHTML = `<img src="${user.photoURL}">`;
      console.log(user.photoURL);
    } else {
      console.log('not logged in');
    }
    let id = user.uid;
    userConect = database.ref('users/' + id);
    addUser(user.displayName, user.email, user.photoURL);
  });

  addUser = (name, email, photo) => {
    let conect = userConect.push({
      name: name,
      email: email,
      photo: photo
    });
  };
}());

const postText = document.getElementById('post-entry');
const btnShare = document.getElementById('new-post');

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
