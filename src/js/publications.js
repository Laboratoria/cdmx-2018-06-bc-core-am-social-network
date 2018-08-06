socialNetwork.initFirebase();
// Se inicializa Cloud Firestore a través de firebase
let db = firebase.firestore();

// Se manda llamar el botón signout para detonar evento
document.getElementById('signout').addEventListener('click', event => {
  // Para que no se recargue la pagina
  event.preventDefault();
  // Se manda llamar la funnción signOut
  socialNetwork.signOut();
});
// Se crea perfil de usuario 
const userProfile = user => {
  // Se condiciona, para extraer el nombre y comparar si el resultado es nulo se usara el email como nombre de usuario y se imprimira en pantalla. 
  if (user.displayName === null) {
    document.getElementById('user-name').innerHTML = user.email;
  }
  // Se manda llamar el email para que aparezca en el perfil de usuario
  document.getElementById('user-email').innerHTML = user.email;
  // Se  manda a llamar la foto
  userPhoto = document.getElementById('user-image');
  // Si la foto es null se utilizara una foto por default
  if (user.photoURL === null) {
    userPhoto.src = '../images/user.png';

    // Si el usuario tiene foto se utilizara esa
  } else {
    userPhoto.src = `${user.photoURL}?height=200`;
  }
};

// Función para traer la información y pasarla (pintarla en el momentario)
const getUserInfo = () => {
  let userPhotoLink;
  let currentName;
  // Función de firebase para ver si el usuario tiene sesión activa
  firebase.auth().onAuthStateChanged(user => {
    // Si es así 
    if (user) { // Se llama  a la función del perfil de usuario para pintar los datos en comentario
      userProfile(user);
      document.getElementById('send-post').addEventListener('click', event => {
        event.preventDefault();
        // Es un metodo de firebase que para incluir una marca de tiempo generada por el servidor
        let datePost = firebase.firestore.FieldValue.serverTimestamp();
        // Se obtiene el valor introducido por el usuario dentro de el input
        const contentPost = document.getElementById('content-post').value;
        // Se analiza que no contenga espacios el post para que el usuario pueda publicar
        if (contentPost !== '' && contentPost !== ' ') {
          // Si el usuario se logeo con correo y contraseña se le dara una por default
          if (user.photoURL === null) {
            userPhotoLink = '../images/user.png';
            // Si no se utilizara la foto que el usuario tenga
          } else {
            userPhotoLink = user.photoURL;
          }
          // Si el usuario no tiene nombre, es decir se logueo por correo y contraseña se utilizara en email como nombre
          if (user.displayName === null) {
            currentName = user.email;
            // Si no se utilizara el nombre con el cuál esta en redes (google, facebook)
          } else {
            currentName = user.displayName;
          }
          // En Cloud Firebase se crea una collección llamada 'post'que contenga lo siguiente
          db.collection('post').add({
            userID: user.uid,
            userName: currentName,
            userPhoto: userPhotoLink,
            time: datePost,
            content: contentPost
          }).then(result => { 
            // Se le manda una alerta al usuario avisandole que su post fue publicado
            alert('Publicación exitosa');
            // Se obtiene el valor del post introducido por el usuario 
            document.getElementById('content-posts').value = '';
            // Se ejecuta la función drawPost para pintarlo en la pagina
            drawPost();
          }).catch(error => {
            console.error('Error', error);
          });
        }
      });
      // Este else se utiliza por si el usurio no ha sido logueado no se le permita el acceso al muro
    } else {
      // Y es redireccionado a el login
      location.href = ('../index.html');
    }
  });
};

// Función para pintar el comentario
const drawPost = () => {
  // Metodo de Firebase para ver si el usuario tiene sesión activa
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // Se crea una const para guardar el id del usuario, generado en la colleccion post
      const currentUserID = user.uid;
      // Se crea una const para hacer referencia a la colección post y se ordena mediante el método orderBy por tiempo en orden descendente 
      const postRef = db.collection('post').orderBy('time', 'desc');
      // Get se utiliza para traer la referencia antes mencionada
      postRef.get()
        .then(element => {
          let result = '';
          // Se va a iterar los elementos del post
          element.forEach(post => {
            if (currentUserID === post.data().userID) {
              // Se crea un templete string para pintar los comentarios del usuario activo con los botones para que pueda editar o borrar
              // Se utiliza ${} para inyectar el valor que se indica en cada una la caja de publicación
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
          // Se imprime en HTML los post
          document.getElementById('list-post').innerHTML = result;
        });
      // Si el usuario no tiene sesión activa no puede acceder a el muro 
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
      // Update nos sirve para actualizar datos
      db.collection('post').doc(postID).update({
        content: postContentEdit
      }).then(element => {
        drawPost();
      }).catch(element => {
        console.log('Error al editar la publicación');
      });
    });
};
// Se llaman la funciones 
getUserInfo();
drawPost();

