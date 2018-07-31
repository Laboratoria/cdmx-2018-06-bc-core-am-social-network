// FIRESTORE FOR CRUD
firebase.initializeApp({
  apiKey: 'AIzaSyCU1xkVag73YWUERya-On5x4VaBBXzXxgo',
  authDomain: 'red-social-237f9.firebaseapp.com',
  projectId: 'red-social-237f9'
});
// Con esto se inicializa Nube de firestore a través de Firebase
const db = firebase.firestore();

const boton = document.getElementById('botonP');

boton.addEventListener('click', event => {

  const text = document.getElementById('comentario');
  let texto = text.value;

  if (texto ==='') {
    alert('Por favor ingresa un mensaje.');
  } else {
    //  construir nuevo objeto de fecha y convertirlo a un string UTC para pintarlo de manera estandard
    const yearDateTime = firebase.firestore.FieldValue.serverTimestamp();

    // AQUI VA LO DEL USUARIO

    // CRUD
    // Aquí se agrega un objeto a la coleccion "comments" del firestore
    // el "add" agrega un id único en automatico
    db.collection('comments').add({
        dateTime: yearDateTime,
        comment: texto,
        likeCounter: 0
      })
      // luego,
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
        // con esto se reinician los input despues con el "click", o sea, una vez que se haya guardado el dato, va a generar un string vacio
        text.value = '';
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }
});

const container = document.getElementById('container');
// Aquí lee los documentos de la coleccion "comments" y el querySnapshot se repitirá por cada comment por el forEach
// onSnapshot=agente de escucha--> actualización en tiempo real
db.collection('comments').onSnapshot((querySnapshot) => {
  container.innerHTML = '';
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data().comment}`);

    //

    container.innerHTML += `<div class="card">
                                  <div class="contenidoC">
                                    <p>${doc.data().dateTime}</p>
                                    <p>${doc.data().comment}</p>
                                    <button class="btn eliminate" onclick="eliminate('${doc.id}')"><i class="fas fa-trash-alt"></i></button>
                                    <button class="btn edit" onclick="edit('${doc.data().comment}')"><i class="fas fa-edit"></i></button>
                                    <button class="btn share"><i class="fas fa-share"></i></button>
                                    <button class="btn like"><i class="fas fa-gem"></i></button>
                                    </div>
                                </div>`;
  });
});

sort = (id) => {

  sortComments
  db.collection('comments').doc(id).sort()
}

// CRUD - UPDATE FUNCTION
edit = (texto) => {
  document.getElementById('comentario').value = texto;
  let inputRef = db.collection('comments').doc(id);
  return inputRef.update({
      comment: texto
    })
    .then(function () {
      console.log('Document successfully updated!');
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};


//   // validar si se creó el elementos(boton y comment)
//   let botonesBorrar = document.getElementsByClassName('borrar');
//   // --> devuelve coleccion de elementos
//   for (let i = 0; i < botonesBorrar.length; i++) {
//     botonesBorrar[i].addEventListener('click', function() {
//       // console.log("holi");
//       document.getElementById('container').elements[i].remove()
//         .then(function() {
//           console.log('Document successfully deleted!');
//         }).catch(function(error) {
//           console.error('Error removing document: ', error);
//         });
//     });
//   }
//   // obtener los elementos
// });


// CRUD - DELETE FUNCTION

eliminate = (id) => {
  db.collection('comments').doc(id).delete()
    .then(function () {
      console.log('Document successfully deleted!');
    })
    .catch(function (error) {
      console.error('Error removing document: ', error);
    });
}



// TOGGLE SIDEBAR FUNCTION
const toggleBtn = document.getElementById('pullSidebar');
toggleBtn.addEventListener('click', event = () => {
  document.getElementById('toggleSidebar').classList.toggle('active');
});

// EVENT TO LOG OUT
btlogout.addEventListener('click', event => {
  const logout = document.getElementById('btlogout');
  firebase.auth().signOut()
    .then(function () {
      console.log('saliendo...');
    })
    .catch(function (error) {
      console.log(error);
    });
  location.href = '../index.html';
});
