// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCGT48tRRTrbUJvfWb3PvKZfSgISreF1S0',
  authDomain: 'red-social-96a75.firebaseapp.com',
  databaseURL: 'https://red-social-96a75.firebaseio.com',
  projectId: 'red-social-96a75',
  storageBucket: 'red-social-96a75.appspot.com',
  messagingSenderId: '775319261849'
};
firebase.initializeApp(config);
let database = firebase.database();

var db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);