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
var db = firebase.firestore();

let user = localStorage.getItem("mail");
let userUid = localStorage.getItem("userUid");
console.log(userUid);

let userPhoto;
const bringData = () => {
    if (user === "google" || user === "facebook") {
        user = localStorage.getItem("display");
        userPhoto = localStorage.getItem("photo");
    } else {
    }
}
bringData()

dataName.innerHTML = user;

btnPost.addEventListener('click', e => {
    let posted = postText.value;
    if (posted === "" || posted === " ") {
        alert('Escribe un mensaje')
    } else {
        db.collection("posted").add({
            user: userUid,
            name: user,
            post: posted
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                postText.value = '';
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }
});

db.collection("posted").onSnapshot((querySnapshot) => {
    comentarios.innerHTML = '';
    querySnapshot.forEach((doc) => {
        let postID = doc.id
        let postName = doc.data().name
        let text = doc.data().post
        let userId = doc.data().user
        printPost(postID, postName, text, userId);
    });
});

const printPost = (postID, postName, text, userId) => {
    if (userUid === userId) {
        comentarios.innerHTML += `<div>
                <form action="">
                <p>${postName}</p>
                    <input type="text" id="input" readonly = "readonly" value="${text} ">
                    <p id="likes" class="inline"></p>
                    <input type="button" class="btnEdit btn" onclick="likePost()" value="Like">
                    <input type="button" class="btnEdit btn" onclick="editPost('${postID}')" value="Editar">
                    <input type="button" class="btn delete" value="Eliminar" onclick="deletePost('${postID}','${postName}', '${text}', '${userId}')">
                    <input type="button" class="btn none" onclick="savePost()" value="Guardar">
                </form>
              </div>`;
    } else {
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

const deletePost = (postID) => {
    db.collection("posted").doc(postID).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

const editPost = (postID, postName, text, userId) => {
    let newPost = prompt('Escribe tus cambios');
    let postRef = db.collection("posted").doc(postID);

    // Set the "capital" field of the city 'DC'
    return postRef.update({
        user: userUid,
        name: user,
        post: newPost
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
};

btnProfile.addEventListener('click', e => {
    window.location.assign('../views/perfil.html');
 });

 btnHome.addEventListener('click', e => {
    window.location.assign('../views/home.html');
});

btnRanking.addEventListener('click', e => {
    window.location.assign('../views/ranking.html');
});

 bntMessage.addEventListener('click', e => {
    window.location.assign('../views/mensaje.html');
});


