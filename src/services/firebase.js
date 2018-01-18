import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_DATABASE_NAME}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_BUCKET}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_SENDER_ID
};

firebase.initializeApp(config);

console.log('firebase app initialized', firebase.app().name); 

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const pagesRef = firebase.database().ref('projects');

export const getPages = () => {
  return pagesRef.on('value', (snapshot) => {
    const rawData = snapshot.val();
    let pages = [], categories = [];
      
    Object.keys(rawData).forEach(p => {
      // create array of pages
      pages.push(rawData[p]);
      // get unique categories
      if (categories.indexOf(rawData[p].category) < 0) categories.push(rawData[p].category);
    });

    return { pages, categories};
  });
}

export default firebase;