// Accedo al servicio de la base de datos
let database = firebase.database();

window.basesData = {
  comment: (getPost) => {
    database.ref('chat').push({
      getPost: getPost
    });
  }
};