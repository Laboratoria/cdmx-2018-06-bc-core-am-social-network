socialNetwork.initFirebase();
let db = firebase.firestore();

document.getElementById('signout').addEventListener('click', event => {
  event.preventDefault();
  socialNetwork.signOut();
});

const userProfile = user => {
  if (user.displayName === null) {
    document.getElementById('user-name').innerHTML = user.email;
  }
  document.getElementById('user-email').innerHTML = user.email;
  userPhoto = document.getElementById('user-image');
  if (user.photoURL === null) {
    userPhoto.src = '../images/user.png';
  } else {
    userPhoto.src = `${user.photoURL}?height=200`;
  }
};

