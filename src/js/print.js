window.onload = () => {
  firebase.database().ref('posts')
    .on('child_added', (newPost) => {
      document.getElementById('new-posts').innerHTML += `
      <p>Nombre: ${newPost.val().creatorName}</p>
      <p>${newPost.val().text}</p>
    `;
    });
};
const printName = (userCharged) => {
  let nameToPrint = document.getElementById('user-paragraph');
  let toPrint = `¡Bienvenidx ${userCharged}! Te has logueado exitosamente`;
  nameToPrint.innerHTML = toPrint;
};