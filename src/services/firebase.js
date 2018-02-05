import firebase from 'firebase';
import store from '../store/store';
import { LOGOUT } from '../app/reducers';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_DATABASE_NAME}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_BUCKET}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_SENDER_ID
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();
export const db = firebaseApp.database();
export const feedsRef = db.ref('feeds');
export const pagesRef = db.ref('pages');

auth.onAuthStateChanged(user => {
  if (!user) store.dispatch({ type: LOGOUT });
});