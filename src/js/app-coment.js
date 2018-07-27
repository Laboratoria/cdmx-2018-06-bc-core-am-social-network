firebase.initializeApp({
    apiKey: "AIzaSyC3-Ko-NLEwcZEnIRY0sOiR1H-fa3bE1fk",
    authDomain: "red-social-867d8.firebaseapp.com",
    projectId: "red-social-867d8",
  });
  //Se agregan los siguientes campos como registro
  //  DB Initialize Cloud Firestore through Firebase
  let db = firebase.firestore();
  
const guardar = () =>{
    //obtener valores
    let comentario = document.getElementById("comentario").value;
    db.collection("users").add({
        first: comentario,
        last: "Lovelace",
        born: 1815
    })
    //se agrego correctamente lo anterior aparecera el mensaje del docRef.id
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        //limpiar campos al enviar ya un comentario
        document.getElementById("comentario").value = "";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}

//para poder leer y pintar los datos 
let paint = document.getElementById("getcomentario").value;
//LLAMA DB (INICIACION DE FIRESTORE) EN NUESTRO CASO LA COLECCIÓN ES USUARIO
//se susutituye .get para que este mostrando los datos en tiempo real
db.collection("users").onSnapshot((querySnapshot) => {
    getcomentario.innerHTML="";
    //FOR EACHE SE REPIETIRA EN CADA DOCUMENTO DE USER
    querySnapshot.forEach((doc) => {
        //SE PINTARA EL ID Y LO QUE CONTIENE
        console.log(`${doc.id} => ${doc.data().first}`);
        getcomentario.innerHTML += `
        <section>
        <div>${doc.data().first}</div>
        <!--Por cada boton que se crea contiene los datos-->
        <button class="btn btn-danger" onclick="eliminar('${doc.id}')">Elimar</button>
        <button class="btn btn-warning" onclick="editar('${doc.id}', '${doc.data().first}')">Editar</button>
        </section>
        `
    });
});


//borrar datos
const eliminar = (id) => {
    db.collection("users").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}


//editar datos

const editar = (id,comentario) =>{

    document.getElementById("comentario").value = comentario ;
    //el boton con este id"guardar" se modificara su texto html a editar
    let boton = document.getElementById("guardar");
    boton.innerHTML = "Editar";
    //Al presionar el boton q dice editar c correra la sig funcion
    boton.onclick() = function(){ 
        let washingtonRef = db.collection("users").doc(id);
        // Set the "capital" field of the city 'DC'
    let comentario = document.getElementById("comentario").value;
    return washingtonRef.update({
        first: comentario,
       
    })
    .then(function() {
        console.log("Document successfully updated!");
        boton.innerHTML = "Guardar";
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    }
         
}

