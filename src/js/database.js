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
    drawPost += `<div >${post2}</div>`;
  });
  drawPostear.innerHTML = drawPost;
});