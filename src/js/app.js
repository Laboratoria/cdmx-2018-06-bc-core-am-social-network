// FIRESTORE FOR CRUD
firebase.initializeApp({
  apiKey: "AIzaSyCU1xkVag73YWUERya-On5x4VaBBXzXxgo",
  authDomain: "red-social-237f9.firebaseapp.com",
  projectId: "red-social-237f9"
});

// Con esto se inicializa Nube de firestore a través de Firebase
let db = firebase.firestore();

const boton = document.getElementById('botonP');
boton.addEventListener("click", event => {
  // console.log('holi');
  let text = document.getElementById('comentario');
  // console.log(text);

  let texto = text.value;
  //   construir nuevo objeto de fecha y convertirlo a un string UTC para pintarlo de manera estandard
  const yearDateTime = new Date().toUTCString();
  // console.log(yearDateTime);


  // CRUD 
  // Aquí se agrega un objeto a la coleccion "comments" del firestore
  // el "add" agrega un id único en automatico
  db.collection("comments").add({
      dateTime: yearDateTime,
      comment: texto
    })
    //luego,
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      // con esto se reinician los input despues con el "click", o sea, una vez que se haya guardado el dato, va a generar un string vacio
      text.value = '';
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
})

let container = document.getElementById('container')
// Aquí lee los documentos de la coleccion "comments" y el querySnapshot se repitirá por cada comment por el forEach
//onSnapshot=agente de escucha--> actualización en tiempo real
db.collection("comments").onSnapshot((querySnapshot) => {
  container.innerHTML = '';
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data().comment}`);

    //

    container.innerHTML += `<div class="card">
                                  <div class="contenidoC">
                                    <p>${doc.data().dateTime}</p>
                                    <p>${doc.data().comment}</p>
                                    <button class="btn"><i class="fas fa-gem"></i></button>
                                    <button class="btn"><i class="fas fa-share"></i></button>
                                    <button class="btn" onclick="edit('${doc.data().comment}')"><i class="fas fa-edit"></i></button>
                                    <button class="btn"><i class="fas fa-save"></i></button>
                                    <button class="btn" onclick="eliminate('${doc.id}')"><i class="fas fa-trash-alt"></i></button>
                                  </div>
                                </div>`
  });
});


// Para borrar documentos de la coleccion en tiempo real:
function eliminate(id) {
  db.collection("comments").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
}

// Para editar documentos de la coleccion en tiempo real:
function edit(texto) {

  document.getElementById('comentario').value = texto

  let inputRef = db.collection("comments").doc(id);
  return inputRef.update({
      comment: texto
    })
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}
