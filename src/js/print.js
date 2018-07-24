window.onload = () => {
  firebase.database().ref('posts')
    .on('child_added', (newPost) => {
      document.getElementById('new-posts').innerHTML += `
      <div class="postCard">
        <p class="postName">${newPost.val().creatorName}</p>
        <hr>
        <p>${newPost.val().text}</p>
      </div>
    `;
    });
};

const printName = (userCharged) => {
  let nameToPrint = document.getElementById('user-paragraph');
  let toPrint = `¡Bienvenidx ${userCharged}! Te has logueado exitosamente`;
  nameToPrint.innerHTML = toPrint;
};

