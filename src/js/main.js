// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCwZtKNwCJJTU-oRr5j2LL921ZbKPP6ovQ',
  authDomain: 'social-network-laboratoria.firebaseapp.com',
  databaseURL: 'https://social-network-laboratoria.firebaseio.com',
  projectId: 'social-network-laboratoria',
  storageBucket: 'social-network-laboratoria.appspot.com',
  messagingSenderId: '67671745906'
};
firebase.initializeApp(config);


const logout = document.getElementById('logout');

logout.addEventListener('click', event => {
  firebase.auth().signOut();
  location.href = 'index.html';
});