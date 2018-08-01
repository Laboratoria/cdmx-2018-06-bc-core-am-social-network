let userName = localStorage.getItem('mail');

const addPost = (comment) => {  
  db.collection('posts').add({
    nameUser: userName,
    post: comment,
    likes: like
  })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('post').value = '';
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
};

// Publicacion de comentarios
db.collection('posts').onSnapshot((querySnapshot) => {
  document.getElementById('finalWall').innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().post}`);
    finalWall.innerHTML += `<div class="card col-sm-10 col-md-8 mb-3">
        <div class="card-body">
            <p>${userName}</p>
            <p>${doc.data().post}</p>
            <button id="deleteComment" onclick="deletePost('${doc.id}')">Borrar</button>
            <button id="editComment" onclick="editPost('${doc.id}', '${doc.data().post}')">Editar</button>
            <button id="like" onclick="likePost('${doc.id}')">Like</button>
            <span id="likess"><i class="far fa-heart"></i></span>
        </div>
    </div>`;
  });
});

// Borrar datos
const deletePost = (id) => {
  db.collection('posts').doc(id).delete().then(function() {
    console.log('Document successfully deleted!');
  }).catch(function(error) {
    console.error('Error removing document: ', error);
  });
};

// Editar comentario en especifico
const editPost = (id, comment) => {
  document.getElementById('post').value = comment;
  let buttonEdit = document.getElementById('toPost');
  buttonEdit.innerHTML = 'Guardar';
  buttonEdit.addEventListener('click', event => {
    // let postRef = db.collection('posts').doc(id);
    let newComment = document.getElementById('post').value;
    return db.collection('posts').doc(id).update({
      post: newComment
    })
      .then(function() {
        console.log('Document successfully updated!');
        buttonEdit.innerHTML = 'Publicar';
        document.getElementById('post').value = '';
      })
      .catch(function(error) {
        console.error('Error updating document: ', error);
      });
  });
};

// Da y quita like
let like = false;
let contLike = 0;
const likePost = (id) => {
  db.collection('posts').doc(id).like;
  if (like === true) {
    like = false;
    contLike--;
    document.getElementById('like').innerHTML = 'Like';
    if (contLike === 0) {
      document.getElementById('likess').innerHTML = '<i class="far fa-heart"></i>';
    } else {
      document.getElementById('likess').innerHTML = `<i class="far fa-heart">   ${contLike}</i>`;
    }
  } else {
    like = true;
    contLike++;
    document.getElementById('like').innerHTML = 'Dislike';
    document.getElementById('likess').innerHTML = `<i class="fas fa-heart">   ${contLike}</i>`;
  }
};

// Cerrar sesion
logOut = () => {
  firebase.auth().signOut().then(function() {
    console.log('Saliendo...');
    location.replace('../index.html');    
  }).catch(function(error) {
    console.log(error);    
  });
};
