let profileLink = document.getElementById('profile-info');
let profileContainer = document.getElementById('profile-container');

profileLink.addEventListener('click', obtenerUsuarioDatabase);
const obtenerUsuarioDatabase = (user)=>{
  firebase.database().ref('users').set({
    username: user.displayName,
    email: user.email,
    profPicture: user.photoURL
  });
};
window.onload = () =>{
  firebase.database().ref('users')
    .on('child_added', (newUser) => {
      profileContainer.innerHTML +=
   `<p>${newUser.val().username}:</p>
   <p>${newUser.val().email}:</p>`;
    });
};
