let db = initiaziling();
const getUserInfo = (user)=>{// Lama a la info de firebase
  const userProfileConteiner = document.getElementById('profileContent');
  db.collection('diabeTipsUsers').onSnapshot((querySnapshot) => { // onStapshot va a vigilar cuando haga cambios y si hay un cambio entra y te dice que fue lo que cambió
    userProfileConteiner.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      userProfileConteiner.innerHTML = `<p><i class="material-icons">account_circle</i> Nombre:</p>
        <p><i class="material-icons">child_care</i> Edad: ${doc.data().userAge}</p>
        <p><i class="material-icons">fitness_center</i> Peso: ${doc.data().userWeight}</p>
        <p><i class="material-icons">accessibility</i> Estatura: ${doc.data().userSize}</p>
        <p><i class="material-icons">favorite_border</i> Glucosa: ${doc.data().blodSugar}</p>
        <p><i class="material-icons">enhanced_encryption</i> Medicamentos: ${doc.data().medicine}</p>
        <p><i class="material-icons">enhanced_encryption</i> NSS: ${doc.data().nss}</p>
        <p><i class="material-icons">assignment_ind</i> Atecedentes:</p>
        <p><i class="material-icons">face</i> Padres: ${doc.data().antecedents.fatherSick}</p>
        <p><i class="material-icons">child_friendly</i> Hijos: ${doc.data().antecedents.childrenSick}</p>
        <p><i class="material-icons">group</i> Abuelos: ${doc.data().antecedents.grandPsick}</p>`;
    });
  });
};


const llamaContenido = () => {
  console.log('hola onload');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('hola usuario');
      getUserInfo(user);
    } else {
      alert('No, no, no ... No te has iniciado sesion');
    }
  });
};

llamaContenido();
