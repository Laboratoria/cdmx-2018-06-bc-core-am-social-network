const btnPostPerfil = document.getElementById('btnPostPerfil');
let mensaje = document.getElementById('postTextProfile');

//Comentarios perfil
window.onload = () => {
    const databasePost = firebase.database().ref().child('postsProfile');
    databasePost.on('child_added', snap => {
        let postName = snap.child("name").val();
        let text = snap.child("post").val();
        let userId = snap.child("user").val();
        //console.log(userId);
        printPostPerfil(postName, text, userId);
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

btnPostPerfil.addEventListener('click', e => {
    let posted = mensaje.value;
    if (posted === "" || posted === " ") {
        alert('Escribe un mensaje')
    } else {

        let ref = database.ref('postsProfile');
        let data = {
            user: userUid,
            name: user,
            post: posted
        }
        console.log(data);
        ref.push(data);
        postTextProfile.value = '';
    }
});

const printPostPerfil = (postName, text, userId) => {
    const comentariosPerfil = document.getElementById('comentariosPerfil');


    if (userUid === userId) {
        comentariosPerfil.innerHTML += `<div>
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
        
        comentariosPerfil.innerHTML += `<div>
                <form action="">
                <p>${postName}</p>
                    <input type="text" id="input" readonly = "readonly" value="${text} ">
                    <p id="likes" class="inline"></p>
                    <input type="button" class="btnEdit btn" onclick="likePost()" value="Like">
                </form>
              </div>`;
    }
}
