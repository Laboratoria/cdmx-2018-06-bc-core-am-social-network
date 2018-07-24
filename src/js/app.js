// FIRESTORE FOR CRUD
firebase.initializeApp({
  apiKey: "AIzaSyCU1xkVag73YWUERya-On5x4VaBBXzXxgo",
  authDomain: "red-social-237f9.firebaseapp.com",
  projectId: "red-social-237f9"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


let text = document.getElementById('comentario');
let boton = document.getElementById('botonP');
let newPost = document.getElementById('container');
console.log(text);

/*function comentario() {

    let divPost = '';
    let comment = text.value;
    console.log(comment);
      divPost += `<div class="card">
                    <div class="contenidoC">
                        <p>${comment}</p>
                    </div>
                </div>`
                container.innerHTML = divPost;
};*/

boton.addEventListener("click", event => {
//   console.log('holi');
  let texto = text.value;
//   console.log(texto);
  let divPost = '';
  divPost += `<div class="card">
                      <div class="contenidoC">
                          <p>${texto}</p>
                      </div>
                  </div>`
//   console.log(divPost);
  container.innerHTML = divPost;

  // CRUD
  db.collection("comments").add({
      comment: texto
    })

// Con esto se inicializa Nube de firestore a través de Firebase
let db = firebase.firestore();


let boton = document.getElementById('botonP');
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
  db.collection("comments").add({
      dateTime: yearDateTime,
      comment: texto
    })
    //luego,

    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      text.value = '';
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

})

// LEER DOCUMENTOS
db.collection("comments").get().then((querySnapshot) => {
    container.innerHTML = '';
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(`${doc.id} => ${doc.data().comment}`);

// CONVERTIR EN ARRAY? PARA TYPEOFARRAY() SORT()

        container.innerHTML += `<div class="card">
                      <div class="contenidoC">
                          <p>${doc.data().comment}</p>
                      </div>
                  </div>`
    });
});

  })

  let container = document.getElementById('container')
// Aquí lee los documentos de la coleccion "comments" y el querySnapshot se repitirá por cada comment por el forEach
//onSnapshot=agente de escucha--> actualización en tiempo real
  db.collection("comments").onSnapshot((querySnapshot) => {
    container.innerHTML = '';
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().comment}`);

    container.innerHTML += `<div class="card">
                                  <div class="contenidoC">
                                    <p>${doc.data().dateTime}</p>
                                    <p>${doc.data().comment}</p>
                                  </div>
                                </div>`
    });
});




// ASI LO TENIAMOS ANTES Y NO FUNCIONABA
/*function comentario() {


    let divPost = '';
    let comment = text.value;
    console.log(comment);
      divPost += `<div class="card">
                    <div class="contenidoC">
                        <p>${comment}</p>
                    </div>
                </div>`

                container.innerHTML = divPost;
};*/

