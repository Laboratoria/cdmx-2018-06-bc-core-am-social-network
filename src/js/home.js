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
const addingPhoto = document.getElementById('photo');
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
            post: posted,
            like: 0
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
        comentarios.innerHTML += `<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey lighten-5">
            <div class="card-content black-text">
              <span class="card-title pink-text">${postName}</span>
              <p>${text}</p>
            </div>
            <div class="card-action">
                    <button id="btnLogout" class="btn-flat pink-text" onclick="likePost('${postID}')">
                            <i class="large material-icons">favorite</i>
                    </button>
                    <button id="btnLogout" class="btn-flat" onclick="editPost('${postID}')">
                            <i class="large material-icons">mode_edit</i>
                    </button>
                    <button id="btnLogout" class="btn-flat" onclick="deletePost('${postID}','${postName}', '${text}', '${userId}')">
                            <i class="large material-icons">delete</i>
                    </button>
            </div>
          </div>
        </div>
      </div>`;
    } else {
        comentarios.innerHTML += `<div class="row">
        <div class="col s12 m6">
          <div class="card white">
            <div class="card-content black-text">
              <span class="card-title pink-text">${postName}</span>
              <p>${text}</p>
            </div>
            <div class="card-action">
                    <button id="btnLogout" class="btn-flat pink-text" onclick="likePost('${postID}')">
                            <i class="large material-icons">favorite</i>
                    </button>
            </div>
          </div>
        </div>
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
    addingPhoto.innerHTML = `<img id="user-photo" src="${userPhoto}" class="col s5 m4 l2 offset-3 circle foto-perfil" alt="">`;
 });

 btnHome.addEventListener('click', e => {
    window.location.assign('../views/home.html');
});

 bntMessage.addEventListener('click', e => {
    location.href = '../views/mensaje.html';
});



