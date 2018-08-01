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
const profile = document.getElementById('profile');
const home = document.getElementById('home');
const postForm = document.getElementById('postForm');
const btnHome = document.getElementById('btnHome');
const btnRanking = document.getElementById('btnRanking');
const bntMessage = document.getElementById('btnMessage');
const userPrintPhoto = document.getElementById('user-photo');



let user = localStorage.getItem("mail");
let userUid = localStorage.getItem("userUid");
console.log(userUid);
console.log(user);

let userPhoto;
const bringData = () => {
    if (user === "google" || user === "facebook") {
        user = localStorage.getItem("display");
        console.log(user);
        userPhoto = localStorage.getItem("photo");
        console.log(userPhoto);

    } else {

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
            user: userUid,
            name: user,
            post: posted
        }
        ref.push(data);
        postText.value = '';
    }
});

let keys;
window.onload = () => {
    const databasePost = firebase.database().ref().child('posts');
    databasePost.on('child_added', snap => {
        let postName = snap.child("name").val();
        let text = snap.child("post").val();
        let userId = snap.child("user").val();
        //console.log(userId);
        printPost(postName, text, userId);
    });
    databasePost.on('value', data => {
        let getKeys = data.val();
        let keysObj = Object.keys(getKeys);
        for (let i = 0; i < keysObj.length; i++) {
            keys = keysObj[i];
            editPost(keys);
            // console.log(keys);
        }
        // console.log(keys);
    })
};

const printPost = (postName, text, userId) => {
    const comentarios = document.getElementById('comentarios');
    //console.log(comentarios);

    if (userUid === userId) {
        comentarios.innerHTML += `<div>
                <form action="">
                <p>${postName}</p>
                    <input type="text" id="input" readonly = "readonly" value="${text} ">
                    <p id="likes" class="inline"></p>
                    <input type="button" class="btnEdit btn" onclick="likePost()" value="Like">
                    <input type="button" class="btnEdit btn" onclick="editPost()" value="Editar">
                    <input type="button" class="btn delete" value="Eliminar" onclick="deletePost()"> 
                    <input type="button" class="btn none" onclick="savePost()" value="Guardar">
                </form>
              </div>`;
    } else {
      //  console.log(comentarios);
        comentarios.innerHTML += `<div>
                <form action="">
                <p>${postName}</p>
                    <input type="text" id="input" readonly = "readonly" value="${text} ">
                    <p id="likes" class="inline"></p>
                    <input type="button" class="btnEdit btn" onclick="likePost()" value="Like">
                </form>
              </div>`;
    }
}



//Función para editar post
const editPost = (keys) => {
    // console.log(keys);

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
    alert('delete');
}


btnProfile.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = '../views/perfil.html';
    console.log(user);
    profile.innerHTML = `<img src="${user.photoURL}" class="col s5 m4 l2 offset-3 circle foto-perfil" alt="foto">
    <h1>${user}</h1>`;
});


btnHome.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = '../views/home.html';

});

btnRanking.addEventListener('click', e => {
    e.preventDefault();
    console.log('hola');
    window.location.href = '../views/ranking.html';
});

bntMessage.addEventListener('click', e => {
    e.preventDefault();
    console.log('hola3');

    window.location.href = '../views/mensaje.html';
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

btnProfile.addEventListener('click', e => {
    postForm.style.display = "none";
    borrar.style.display = "none";
    comentarios.style.display = "none";
    profile.style.display = "block";
    profile.innerHTML = `<h1>${user}</h1>`;
});

// Botón para editar post
/*
btnEdit.addEventListener('click', e => {
    input.removeAttribute("readonly");
    btnLike.style.display = "none";
    btnEdit.style.display = "none";
    btnErase.style.display = "none";
    btnSave.style.display = "block";
});*/