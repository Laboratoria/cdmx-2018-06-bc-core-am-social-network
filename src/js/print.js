window.onload = () => {
  firebase.database().ref('posts')
    .on('child_added', (newPost) => {
      document.getElementById('new-posts').innerHTML += `
      <p>Nombre: ${newPost.val().creatorName}</p>
      <p>${newPost.val().text}</p>
    `;
    });
};