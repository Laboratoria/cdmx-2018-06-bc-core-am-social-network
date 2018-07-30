// obtiene la session del localStorage
let session = window.localStorage.getItem('session');

// regresa al login si no tiene session iniciada
if (!session) {
  location.href = '../index.html';
}
// convierte el string en un objeto JSON y asi poder manipularlo
session = JSON.parse(session);

// obtiene todos los posts de la base de datos de firebase
const loadPosts = () => {
  let url = 'https://red-social-867d8.firebaseio.com/posts.json';

  fetch(url, {
      method: 'GET'
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {

      if (!response) {
        return false;
      }

      const posts = Object.keys(response).reduce((acumulator, value) => {
        let post = response[value];
        post.id = value;
        return [...acumulator, post];
      }, []).map(post => postTemplate(post)).join('');

      return document.getElementById('container-posts').innerHTML += posts;
    });
}

const logout = () => {
  console.log('logout');
  firebase.auth().signOut()
    .then(() => {
      window.localStorage.removeItem('session');
      return location.href = '../index.html';
    })
    .catch((error) => {
      console.log(eror)
    })
};

// envia el nuevo post a la base de datos de firebase
const uploadPost = post => {
  let url = 'https://red-social-867d8.firebaseio.com/posts.json';

  fetch(url, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      post.id = response.name;
      return document.getElementById('container-posts').innerHTML += postTemplate(post);
    });
}

// plantilla de ejemplpo para el post que se pinta en el article con id container-posts
const postTemplate = data => {
  return `
    <div id="${data.id}" class="post">
      <div class="user">
        ${data.user}
      </div>
      <div class="comment">
        ${data.comment}
      </div>
      <div class="likes">
      Me gusta(${data.likes})
      </div>
      <div class="date">
        ${new Date(data.date).toDateString()}
      </div>
      <div class="controls">
        <input type="button" value="Borrar" onclick="deletePost('${data.id}')">
        <input type="button" value="Like" onclick="likePost('${data.id}')">
      </div>
    </div>`;
}

// methodo que genera, envia y agrega el post al DOM
const addPost = event => {
  // rompe el evento por default del submit que es refrescar la pagina y mandar los datos
  event.preventDefault();

  // detiene la propagacion del evento
  event.stopPropagation();

  // obtiene el comentario
  const comment = document.getElementById('input-post').value;

  // evalua si tiene comentario, de lo contrario emite un alert que notfica al usuario
  if (!comment) {
    return alert('Debes de escribir algo');
  }

  // crea el objeto del post con la data
  const post = {
    likes: 0,
    comment: comment,
    user: session.email,
    date: new Date().getTime()
  };

  // manda a llamar la funcion para conectar con firebase y guardar la funcion
  uploadPost(post);

  // reinicia los valores del formulario
  return event.target.reset();
};

// methodo que elimina el post
const deletePost = id => {
  let url = `https://red-social-867d8.firebaseio.com/posts/${id}.json`;

  fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      const elem = document.getElementById(id);
      return elem.parentNode.removeChild(elem);
    });
};

// metodo que agrega like al post
const likePost = id => {
  // este es el id del post al que debo sumar 1 cuando de like
  console.log(id);
};

// obtiene los posts
window.onload = () => loadPosts();
