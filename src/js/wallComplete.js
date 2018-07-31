let comment = document.getElementById('post');

document.getElementById('toPost').addEventListener('click', event => {
  if (comment.value !== null) {
    addPost(
      comment.value);
  } else {
    alert('No se admiten publicaciones vacias!');
  }
});

document.getElementById('closeSession').addEventListener('click', event => {
  window.close.logOut();
});
