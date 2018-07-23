initializeFirebase();
let db = firebase.firestore();

document.getElementById('user-post-btn').addEventListener('click', event => {
    event.preventDefault();
    let newPost = document.getElementById('user-post').value;
    let postedBy = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            return user.email;
        } else {
            // No user is signed in.
            console.log('Ha ocurrido un error.');
            return null;
        }
    });
    addingDataToNewsfeed(postedBy, newPost);

});

document.getElementById('log-out-btn').addEventListener('click', event => {
    event.preventDefault();
    signOutUser();
    alert('¡Hasta la próxima Garnacha!');
    location.href = ('../index.html');
});