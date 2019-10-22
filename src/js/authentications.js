// Inicializar Firebase. Información sobre permisos y dominios del proyecto
const initiaziling = () => {
  const config = {
					  apiKey: 'AIzaSyBoO-dyO4PywqOJJVLDAucttJLMlM5N3vs',
					  authDomain: 'diabetipsoficial.firebaseapp.com',
					  databaseURL: 'https://diabetipsoficial.firebaseio.com',
					  projectId: 'diabetipsoficial',
					  storageBucket: 'diabetipsoficial.appspot.com',
					  messagingSenderId: '1025645095828'
  };
	// Inicializa la app web con las credenciales del proyecto "diabetipsoficials"
  firebase.initializeApp(config);
  // Añadir variable para referenciar todos los metodos de la base de datos
  console.log(firebase);
  const db = firebase.firestore();
  return (db);
};
