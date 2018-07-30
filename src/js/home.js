const dataName = document.getElementById('dataName');
const btnPost = document.getElementById('btnPost');
const postText = document.getElementById('postText');
const comentarios = document.getElementById('comentarios');
const input = document.getElementById('input');
const btnEdit = document.getElementById('btnEdit');
const btnErase = document.getElementById('btnErase');
const btnLike = document.getElementById('btnLike');
const btnSave = document.getElementById('btnSave');
const likes = document.getElementById('likes');
const btnProfile = document.getElementById('btnProfile');
const borrar = document.getElementById('borrar');
const profile = document.getElementById('profile');
const home = document.getElementById('home');
const postForm = document.getElementById('postForm');
const btnHome = document.getElementById('btnHome');

let user = localStorage.getItem("mail");
const bringData = () => {
    if (user === "google" || user === "facebook") {
        user = localStorage.getItem("display");
    } else  {
    } 
}
bringData()

dataName.innerHTML = user;

const databaseUser = firebase.database().ref().child('user');
databaseUser.on('child_added', snap => {
    let userName = snap.child("name").val();
    let userMail = snap.child("mail").val();
    //console.log(userName, userMail);

});

btnPost.addEventListener('click', e => {
    let posted = postText.value;
    if (posted === "" || posted === " ") {
        alert('Escribe un mensaje')
    } else {
        let ref = database.ref('posts');
        let data = {
            name: user,
            post: posted
        }
        ref.push(data);
        postText.value = '';
    }
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
                    <input type="button" class="btnEdit btn" onclick="likePost()" value="Like">
                    <input type="button" class="btnEdit btn" onclick="editPost()" value="Editar">
                    <input type="button" class="btn" onclick="deletePost()" value="Eliminar"> 
                    <input type="button" class="btn none" onclick="savePost()" value="Guardar">
                </form>
              </div>`;
    });
};

//Función para editar post
const editPost = () => {
    alert('editar');
}

//Función para likear post
const likePost = () => {
    alert('like');
}

//Función para salvar post
const savePost = () => {
    alert('save');
}

//Función para eliminar post
const deletePost = () => {
    alert('eliminar');
}

btnProfile.addEventListener('click', e => {
    postForm.style.display = "none";
    borrar.style.display = "none";
    comentarios.style.display = "none";
    profile.style.display = "block";
    profile.innerHTML = `<h3>${user}</h3>`;
});

btnHome.addEventListener('click', e => {
    window.location.reload()
});


// Botón para guardar edición HTML 
/*
btnSave.addEventListener('click', e => {
    let readonly = document.createAttribute("readonly");
    readonly.value = "readonly";
    input.setAttributeNode(readonly);
    btnLike.style.display = "inline-block";
    btnEdit.style.display = "inline-block";
    btnErase.style.display = "inline-block";
    btnSave.style.display = "none";
});*/

/*
let count = 0;
btnLike.addEventListener('click', e => {
    count++;
    likes.innerHTML = count;
});*/


// Botón para editar post
/*
btnEdit.addEventListener('click', e => {
    input.removeAttribute("readonly");
    btnLike.style.display = "none";
    btnEdit.style.display = "none";
    btnErase.style.display = "none";
    btnSave.style.display = "block";
});*/