let config = {
  apiKey: 'AIzaSyBSQUIbzVSxmdELMXnGowhEkEH2QX0joEQ',
  authDomain: 'social-network-edfb3.firebaseapp.com',
  databaseURL: 'https://social-network-edfb3.firebaseio.com',
  projectId: 'social-network-edfb3',
  storageBucket: 'social-network-edfb3.appspot.com',
  messagingSenderId: '342564191947'
};
firebase.initializeApp(config);
let db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);