// Variable de firebase
let DB = initiaziling();
// Varibles del DOM
let btnProfile = document.getElementById('btnProfile');
// Funciones complementarias
const cleanRegister = () =>{
  document.getElementById('nameUser').value = '';
  document.getElementById('ageUser').value = '';
  document.getElementById('weightUser').value = '';
  document.getElementById('sizeUser').value = '';
  document.getElementById('blodSugar').value = '';
  document.getElementById('medicine').value = '';
  document.getElementById('nss').value = '';
  // Cambia el estado de los botoenes checkbox para que queden limpios al nuevo registro
  if (fatherSick === 'Si') {
    fatherSick = true;
    fatherSick = $('#fatherSick');
    fatherSick.prop('checked', !fatherSick.prop('checked')); // Invierte estado en DOM
    fatherSick = false; // Invierte estado logico
  }
  if (grandPsick === 'Si') {
    grandPsick = true;
    grandPsick = $('#grandPsick');
    grandPsick.prop('checked', !grandPsick.prop('checked'));
    grandPsick = false;
  }
  if (childrenSick === 'Si') {
    childrenSick = true;
    childrenSick = $('#childrenSick');
    childrenSick.prop('checked', !childrenSick.prop('checked'));
    childrenSick = false;
  }
};
// Funciones CRUD
const createUserProfile = () =>{
  // Traer elementos del DOM
  let userName = document.getElementById('nameUser').value;
  let userAge = document.getElementById('ageUser').value;
  let userWeight = document.getElementById('weightUser').value;
  let userSize = document.getElementById('sizeUser').value;
  let blodSugar = document.getElementById('blodSugar').value;
  let medicine = document.getElementById('medicine').value;
  let nss = document.getElementById('nss').value;
  let fatherSick = document.getElementById('fatherSick').checked;
  let grandPsick = document.getElementById('grandPsick').checked;
  let childrenSick = document.getElementById('childrenSick').checked;
  // Convierte estado checked /no checked a un String para imprimir
  if (fatherSick === true) fatherSick = 'Si';
  else fatherSick = 'No';
  if (grandPsick === true) grandPsick = 'Si';
  else grandPsick = 'No';
  if (childrenSick === true) childrenSick = 'Si';
  else childrenSick = 'No';
  DB.collection('diabeTipsUsers').add({
    userName: userName,
    userAge: userAge,
    userWeight: userWeight,
    userSize: userSize,
    blodSugar: blodSugar,
    medicine: medicine,
    nss: nss,
    antecedents: {
      fatherSick: fatherSick,
      grandPsick: grandPsick,
      childrenSick: childrenSick
    }
  })
    .then(function(docRef) {
      console.log('Registro de perfil de usuario bajo ID: ', docRef.id);
      // Limpiar los espacios del formulario para un nuevo registro
      alert('Tu perfil esta completo :D');
    		cleanRegister();
    })
    .catch(function(error) {
      console.error('Error: No se concreto el registro', error);
    });
};

// profile da un formato de tabla para mostrar la información de los usuarios que han llenado si perfil
const printprofile = () => {
  const userProfileConteiner = document.getElementById('profileConteniner');
  DB.collection('diabeTipsUsers').onSnapshot((querySnapshot) => { // onStapshot va a vigilar cuando haga cambios y si hay un cambio entra y te dice que fue lo que cambió
    userProfileConteiner.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      userProfileConteiner.innerHTML +=
                               `
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Perfil de DiabeAmigo
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <p class="collapse show">
          <i class="material-icons">account_circle</i> Nombre: ${doc.data().userName}
      </p>
      <p class="collapse show">
          <i class="material-icons">child_care</i> Edad: ${doc.data().userAge}
      </p>
      <p class="collapse show">
          <i class="material-icons">fitness_center</i> Peso: ${doc.data().userWeight}
      </p>
      <p class="collapse show">
          <i class="material-icons">accessibility</i> Estatura: ${doc.data().userSize}
      </p>
      <p class="collapse show">
          <i class="material-icons">favorite_border</i> Glucosa: ${doc.data().blodSugar}
      </p>
      <p class="collapse show">
          <i class="material-icons">enhanced_encryption</i> Medicamentos: ${doc.data().medicine}
      </p>
      <p class="collapse show">
          <i class="material-icons">enhanced_encryption</i> NSS: ${doc.data().nss}
      </p>
      <p class="collapse show">
          <i class="material-icons">assignment_ind</i> Atecedentes:
      </p>
      <p class="collapse show">
          <i class="material-icons">face</i> Padres: ${doc.data().antecedents.fatherSick}
      </p>
      <p class="collapse show">
          <i class="material-icons">child_friendly</i> Hijos: ${doc.data().antecedents.grandPsick}
      </p>
      <p class="collapse show">
          <i class="material-icons">group</i> Abuelos: ${doc.data().antecedents.childrenSick}
      </p>
      <p class="collapse show">
          <button class = "btn" onclick = "editUserProfile('${doc.id}', '${doc.data().userName}', '${doc.data().userAge}','${doc.data().userWeight}', '${doc.data().userSize}', '${doc.data().blodSugar}', '${doc.data().medicine}', '${doc.data().nss}','${doc.data().antecedents.fatherSick}', '${doc.data().antecedents.grandPsick}', '${doc.data().antecedents.childrenSick}')">Editar</button>
      </p>
      <p class="collapse show">
          <button class = "btn" onclick = "deleteUserProfile('${doc.id}')">Borrar</button>
      </p>
      </div>
    </div>
  </div>
</div>`;
    });
  });
};

const deleteUserProfile = (idProfile) =>{
  DB.collection('diabeTipsUsers').doc(idProfile).delete().then(function() {
    console.log('Document successfully deleted!');
  }).catch(function(error) {
    console.error('Error removing document: ', error);
  });
};

const editUserProfile = (idProfile, userName, userAge, userWeight, userSize, blodSugar, medicine, nss, fatherSick, grandPsick, childrenSick) =>{
  document.getElementById('nameUser').value = userName;
  	document.getElementById('ageUser').value = userAge;
  	document.getElementById('weightUser').value = userWeight;
  	document.getElementById('sizeUser').value = userSize;
  	document.getElementById('blodSugar').value = blodSugar;
  	document.getElementById('medicine').value = medicine;
  	document.getElementById('nss').value = nss;
  	document.getElementById('fatherSick').checked = fatherSick;
  	document.getElementById('grandPsick').checked = grandPsick;
  document.getElementById('childrenSick').checked = childrenSick;

  let btn = document.getElementById('btnProfile');
  btn.innerHTML = 'Editar';
  // Evento del boton
  btn.onclick = () =>{
    var deleteDBRef = DB.collection('diabeTipsUsers').doc(idProfile);
    let editedName = document.getElementById('nameUser').value;
    	let editedAge = document.getElementById('ageUser').value;
    	let editedWeight = document.getElementById('weightUser').value;
    	let editedSize = document.getElementById('sizeUser').value;
    	let editedBlodSugar = document.getElementById('blodSugar').value;
    	let editedMedicine = document.getElementById('medicine').value;
    	let editedNss = document.getElementById('nss').value;
    	let editedFatherSick = document.getElementById('fatherSick').checked;
    	let editedGrandPsick = document.getElementById('grandPsick').checked;
    	let editedChildrenSick = document.getElementById('childrenSick').checked;
    return deleteDBRef.update({
      userName: editedName,
      userAge: editedAge,
      userWeight: editedWeight,
      userSize: editedSize,
      blodSugar: editedBlodSugar,
      medicine: editedMedicine,
      nss: editedNss,
      antecedents: {
        fatherSick: editedFatherSick,
        grandPsick: editedGrandPsick,
        childrenSick: editedChildrenSick
      }
    })
      .then(function() {
        console.log('Document successfully updated!');
        btn.innerHTML = 'Guardar Perfil';
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };
};
/* // Funcion para imprimir en el DOM
const printDOM = (it, place) =>{
	return document.getElementById(it).innerHTML += place;
};
// Imprime los usuarios en el DOM
const printUsersDom = printUsers = () =>{
	let consult = db.ref('userProfile'); // Consuta la base de datos
	consult.on('child_added', (data) =>{ // Por cada elemento de la base de datos devulve el objeto de usuario
		let indice = Object.values(data)[1].path.pieces_.length;
		let idUser = Object.values(data)[1].path.pieces_[indice - 1]; // Guarda el id del usuario presente
		console.log(idUser);
		let userConsults = data.val(); // Toma los valores del obteto y los manda para su proceso
		let profileU = profile(userConsults.userName, userConsults.userAge, userConsults.userWeight, userConsults.userSize, userConsults.blodSugar, userConsults.medicine, userConsults.nss, userConsults.medicineHistory.fatherSick, userConsults.medicineHistory.grandPsick, userConsults.medicineHistory.childrenSick);
		printDOM('profileConteniner', profileU); // Imprime en un espacio en el DOM los datos del usuario
	});
};
// Editar infro de formulario
const editFun = (id)=>{
	console.log('Editando');
};
// Borrar formulario
const deleteFun = () =>{
	let user = db.ref('userProfile/' + idUser);
	user.remove();
	location.reload();
};*/
printprofile();
// Eventos de botones
btnProfile.addEventListener('click', (event) =>{
  createUserProfile();
});
