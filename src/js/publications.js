socialNetwork.initFirebase();
let db = firebase.firestore();

document.getElementById('signout').addEventListener('click', event => {
  event.preventDefault();
  socialNetwork.signOut();
});
// Se crea perfil de usuario 
const userProfile = user => {
  if (user.displayName === null) {
    document.getElementById('user-name').innerHTML = user.email;
  }
  document.getElementById('user-email').innerHTML = user.email;
  userPhoto = document.getElementById('user-image');
  if (user.photoURL === null) {
    userPhoto.src = '../images/user.png';
  } else {
    userPhoto.src = `${user.photoURL}?height=200`;
  }
};
const getUserInfo = () => {
  let userPhotoLink;
  let currentName;
  firebase
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        userProfile(user);
        document.getElementById('send-post').addEventListener('click', event => {
          event.preventDefault();
          let datePost = firebase.firestore.FieldValue.serverTimestamp();
          const contentPost = document.getElementById('content-post').value;
          if (contentPost !== '' && contentPost !== ' ') {
            if (user.photoURL === null) {
              userPhotoLink = '../images/user.png';
            } else {
              userPhotoLink = user.photoURL;
            }
            if (user.displayName === null) {
              currentName = user.email;
            } else {
              currentName = user.displayName;
            }
            // En cloud firebase se crea una collección llamada 'post'que contenga lo siguiente
            db.collection('post').add({
              userID: user.uid,
              userName: currentName,
              userPhoto: userPhotoLink,
              time: datePost,
              content: contentPost
            }).then(result => {
              alert('Publicación exitosa');
              document.getElementById('content-posts').value = '';
              drawPost();
            }).catch(error => {
              console.error('Error', error);
            });
          }
        });
      } else {
        location.href = ('../index.html');
      }
    });
};

const drawPost = () => {
  firebase
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        const currentUserID = user.uid;
        const postRef = db.collection('post').orderBy('time', 'desc');
        postRef.get()
          .then(element => {
            let result = '';
            element.forEach(post => {
              if (currentUserID === post.data().userID) {
                // Se crea un templete string para pintar los comentarios del usuario activo con los botones para que pueda editar o borrar
                result += `<div class="card card-post card-roud" my-2 px-2>
                <div class="card-header1">
                <strong>${post.data().userName}</strong><p>${post.data().time}</p>
                </div>
               <div class="card-body">
               <p class="card-text" id="${post.id}">${post.data().content}</p>
             </div>
                <div class="card-footer1 mr-auto">
                <button class="btn btn-info float-right" onclick="likePost('${post.id}')">
                <i class="fas fa-thumbs-up"></i></button>
                <button class=" ml-2 btn btn-danger float-left" onclick="deletePost('${post.id}')">
                <i class=" ml-2 far fa-trash-alt"></i></button>
                <button class="btn btn-info float-right" onclick="createEditInput('${post.id}')">
                <i class="ml-2  fas fa-edit"></i></button>
                </div>
                </div>
                </div>`;
              } else {
                // Si no es el usuario que realizo el comentario se le mostrara solo la opción de poder dar like
                result += `<div class="card card-post card-round" my-2 px-2>
                <div class="card-header col-10 col-md-10 pl-0">
                <strong>${post.data().userName}</strong><p>${post.data().time}</p>
                </div>
                <div class="card-body">
                  <p class="card-text" id="${post.id}">${post.data().content}</p>
                </div>
                <div class="card-footer mr-auto">
                <div class="col-md-4 text-md-right text-center">
                <button class="btn btn-info mr-4"</button>
                <i class="fas fa-thumbs-up"></i>
                </div>
                </div>
                </div>`;
              }
            });
            document.getElementById('list-post').innerHTML = result;
          });
      } else {
        location.href = ('../index.html');
      }
    });
};

// Borrar post
const deletePost = (postID) => {
  // Se busca el post por id y se realiza la acción delete (borrar)
  db.collection('post').doc(postID).delete()
    .then(element => {
      // Se le manda una confirmación para saber si en verdad quiere eliminarlo
      confirm('Seguro que deseas eliminarla');
      if (confirme === true) {
        drawPost();
      }
    }).catch(element => {
      alert('No se puede borrar');
    });
};
// se llama la propiedad del objeto postID para poder editarlo
const createEditInput = postID => {
  // Busca en la collección 'post' el id del post a editar y lo llama
  db.collection('post').doc(postID).get()
  // Se obtiene respuesta y se ejecuta la acción de crear un input para que el usuario pueda editar su texto(el input esta vacio)
    .then(post => {
      document.getElementById(postID).innerHTML = `<input class="form-control" id="post${postID}" rows="8">${post.data().content}<div class="ml-auto text-right"><button class="btn btn-info" onclick="updatePost('${postID}')"><i class="fas fa-save"></i> Guardar</button><div>`;
    }).catch(error => {
      console.log('Error al editar');
    });
};
// Actualización del post
const updatePost = postID => {
  // Se crea una variable (const) para poder guardar el nuevo valor del post introducido por el usuario
  const postContentEdit = document.getElementById(`post${postID}`).value;
  // Se manda llamar el post por id
  db.collection('post').doc(postID).get()
  // Se obtiene respuesta y se ejecuta la actualización del post editado en la colección
    .then(post => {
      db.collection('post').doc(postID).update({
        content: postContentEdit
      }).then(element => {
        drawPost();
      }).catch(element => {
        console.log('Error al editar la publicación');
      });
    });
};
getUserInfo();
drawPost();

