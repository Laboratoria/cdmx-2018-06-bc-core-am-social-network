const dataName = document.getElementById('dataName');
const btnPost = document.getElementById('btnPost');
const postText = document.getElementById('postText');
const comentarios = document.getElementById('comentarios');
const input = document.getElementById('input');
const btnEdit = document.getElementById('btnEdit');
const btnErase = document.getElementById('btnErase');
const btnLike = document.getElementById('btnLike');
const btnSave = document.getElementById('btnSave');
const likes = document.getElementById('likes')

let user = localStorage.getItem("mail");

dataName.innerHTML = user;

const databaseUser = firebase.database().ref().child('user');
databaseUser.on('child_added', snap => {
  let userName = snap.child("name").val();
  let userMail = snap.child("mail").val();
  //console.log(userName, userMail);

});

btnPost.addEventListener('click', e => {
  let posted = postText.value;
  let ref = database.ref('posts');
  let data = {
    name: user,
    post: posted
  }
  ref.push(data);
  posted = '';
});

window.onload = () => {
  const databasePost = firebase.database().ref().child('posts');
  databasePost.on('child_added', snap => {
    let postName = snap.child("name").val();
    let text = snap.child("post").val();
    console.log(postName, text);

    comentarios.innerHTML += `<div>
                <form action="">
                <p>${postName}</p>
                    <input type="text" id="input" readonly = "readonly" value="${text} ">
                    <p id="likes" class="inline"></p>
                    <input type="button" id="btnLike" class="btnEdit" value="Like">
                    <input type="button" id="btnEdit" class="btnEdit" value="Editar">
                    <input type="button" id="btnErase" value="Eliminar"> 
                    <input type="button" id="btnSave" class="none" value="Guardar">
                </form>
              </div>`;
  });
};




// Botón para editar post

btnEdit.addEventListener('click', e => {
  input.removeAttribute("readonly");
  btnLike.style.display = "none";
  btnEdit.style.display = "none";
  btnErase.style.display = "none";
  btnSave.style.display = "block";
});

btnSave.addEventListener('click', e => {
  let readonly = document.createAttribute("readonly");
  readonly.value = "readonly";
  input.setAttributeNode(readonly);
  btnLike.style.display = "inline-block";
  btnEdit.style.display = "inline-block";
  btnErase.style.display = "inline-block";
  btnSave.style.display = "none";
})

let count = 0;
btnLike.addEventListener('click', e => {
  count++;
  likes.innerHTML = count;
})
