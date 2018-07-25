initializeFirebase();
let db = firebase().database;
    
const publicar = () => {
// da valor de el usuario logeado
  firebase.auth().onAuthStateChanged(user => {
    if (user) { 
      document.getElementById('btn-publicacion').addEventListener('click', event => {
        event.preventDefault();
        const contentPost = document.getElementById('publicacion').value;
        let fechaPublicacion = `${new Date()}`;
        db.collection('publiciones').add({
          contenido: contentPost,
          usuarioid: user.uid,
          usuario: user.displayName,
          fecha: fechaPublicacion
        }).then(result => {
          console.log('publicacion');
        }).cath(error =>{
          console.log('error');
        });
        pintarPublicaciones();
      });
    } else {
      location.href = ('../views/index.html');
    }
  });
};
  
const pintarPublicaciones = () => {
  const publicaciones = db.collection('publicaciones').get()
    .then(response => {
      let result = '';
      result.forEach(element => {
        result += `<div>${element.data()}</div>
       <div>${element.data().usuario}</div>
       `;
      // element.data().id en display none para que cuando el usuario le de click a eliminar busquemos el valor del id y se lo pasamos a la funcion
      });
      document.getElementById('lista').innerHTML = result;
    });
};

const eliminarPublicacion = (idPublicacion) => {
  const publicaciones = db.collection('publicaciones').doc(idPublicacion).delete()
    .then(result => {
      alert('Eliminado');
      pintarPublicaciones();
    });
};
