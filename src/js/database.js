// Accedo al servicio de la base de datos
let database = firebase.database();
let drawPostear = document.getElementById('draw-postear');
window.basesData = {
  closeAccount: () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      }).catch(function(error) {
      // An error happened.
    });
  },
  users: (getName,getEmail) => {
      database.ref('userName').push({
        getName: getName,
        getEmail: getEmail
      });
  },
  comment: (getPost) => {
    // let drawPostear = document.getElementById('draw-postear');
    database.ref('chat').push({
      getPost: getPost
    });
  }
};

database.ref('chat').on('value', snapshot => {
  let drawPost = '';
  snapshot.forEach(e => {
    let draw = e.val();
    let post2 = draw.getPost;
    drawPost += `<p class="section-post" style="background:#45E8A7;">${post2}<input type="button" onclick="detale('${e.key}')" value="Borrar"> <input type="button" onclick="edit('${e.key}','${post2}')" value="Editar"> <input type="button" onclick="like('${e.key}')" value="Like"> </p> </br>`;
  });
  drawPostear.innerHTML = drawPost;
});

const detale = (id) => {
  database.ref('chat/' + id).remove();
};

const edit = (id,post) => {
  document.getElementById('post').value = post;
  let editButon = document.getElementById('postear');
  editButon.value = 'Editar';
  editButon.addEventListener('click', event => {
    let post2 = document.getElementById('post').value;
    document.getElementById('postear').value = 'Postear';
    database.ref('chat/' + id).set({getPost:post2});
    database.ref('chat/' + id).remove();
  });
};

const like = () => {
  
};