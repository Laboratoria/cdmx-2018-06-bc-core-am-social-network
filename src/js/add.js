initiaziling();
let db = firebase.initializeApp();

const crearPublicacion = () => {
  firebase.auth().onAuthStateChanged(user =>{
    if (user) {
      // Aquí obtenemos el valor de lo que se va a publicar en la caja de texto
      document.getElementById('mi-boton').addEventListener('clik', (event)=>{
        event.preventDefault();
        const publicacion = document.getElementById('mi-caja').value;
        if (publicacion !== '' && publicacion !== ' ') {
          // Para obtener la fecha desde el servidor: que crea un tipo de dato llamado time stamp
          const fechaPublicacion = firebase.firestore.FieldValue.serverTimestamp();
          db.colection('publicacion').add({ // búscala, si no la encuentras, créala usando método add() funciona como un objeto
            contenido: publicacion,
            fecha: fechaPublicacion,
            likes: [],
            nombreUsuario: user.email,
            idUsuario: user.uid
          }).then(result =>{
            alert('Publicación exitosa');
            document.getElementById('mi-caja').value.innerHTML = ''; // Sobre escribimos en blanco para limpiar la caja
            pintarPublicaciones();
          }).catch(error =>{
            console.log('ERROR', error);
          });
        } else {
          alert('Debes escribir algo por favor');
        }
      });
    } else {
      location.href = ('login.html');
    }
  });
};
crearPublicacion();

//  Los if's siempre comparan si es true o false
