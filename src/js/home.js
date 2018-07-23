const dataName = document.getElementById('dataName');
const btnPost = document.getElementById('btnPost');
const postText = document.getElementById('postText');
const comentarios = document.getElementById('comentarios');

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

const databasePost = firebase.database().ref().child('posts');
databasePost.on('child_added', snap => {
    let postName = snap.child("name").val();
    let text = snap.child("post").val();
    console.log(postName, text);
    
    comentarios.innerHTML = 
    `<div>
        <form action="">
            <p>${postName}</p>
            <input type="text" readonly="readonly"> ${text} 
            <input type="button" value="Editar">
            <input type="button" value="Eliminar">
        </form>
    </div>`;
});

