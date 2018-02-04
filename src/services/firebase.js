import firebase from 'firebase';

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
// export const db = firebaseApp.database();
export const pagesRef = firebaseApp.database().ref('pages');