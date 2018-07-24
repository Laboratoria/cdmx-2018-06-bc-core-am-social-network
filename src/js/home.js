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

  addUser = (name, email) => {
    let conect = userConect.push({
      name: name,
      email: email
    });
  };

  const postText = document.getElementById('post-entry'); // Texto de entrada
  const btnShare = document.getElementById('new-post'); // Boton de compartir
  
  btnShare.addEventListener('click', event => { // Evento para mandar el texto dee entrada a la database
    const currentUser = firebase.auth().currentUser;
    let textInPost = postText.value;
    postText.value = '';
    const newPostKey = firebase.database().ref().child('posts').push().key;
    firebase.database().ref(`posts/${newPostKey}`).set({
      creator: currentUser.uid,
      creatorName: currentUser.displayName,
      text: textInPost
    });
  });
}());