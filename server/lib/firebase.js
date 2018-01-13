
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyClNewmoaLArj32r2O8gGqIjU0yi3blHL8',
  authDomain: 'joel-gunz.firebaseapp.com',
  databaseURL: 'https://joel-gunz.firebaseio.com',
  projectId: 'joel-gunz',
  storageBucket: 'joel-gunz.appspot.com',
  messagingSenderId: '311592995963'
};

firebase.initializeApp(config);
export default firebase;