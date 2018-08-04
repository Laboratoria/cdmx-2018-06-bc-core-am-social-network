let comment = document.getElementById('post');

document.getElementById('toPost').addEventListener('click', event => {
  if (comment.value !== '') {
    addPost(
      comment.value);
  } else {
    alert('No se admiten publicaciones vacias!');
  }
});

document.getElementById('closeSession').addEventListener('click', event => {
  logOut();
});