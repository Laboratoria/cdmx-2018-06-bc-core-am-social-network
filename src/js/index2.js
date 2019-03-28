let close = document.getElementById('close');
let postear = document.getElementById('postear');
let post = document.getElementById('post');
// let drawPostear = document.getElementById('draw-postear');

close.addEventListener('click', event => { 
  basesData.closeAccount();
  history.back();
  location.replace('../index.html');
});

postear.addEventListener('click', event => {
  let getPost = post.value;
  if (getPost != '') {
    // drawPostear.innerHTML += basesData.comment(getPost);
    basesData.comment(getPost);
    post.value = '' 
  }
});

let prueba = document.getElementById('perfil');
prueba.addEventListener('click', event => {
  window.open('perfil.html','_self');
});