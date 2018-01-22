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

export const firebaseUrl = 'https://joel-gunz.firebaseio.com/';



// export const pagesRef = new firebase(config.firebaseRef);
// export const pagesRef = firebase.database().ref('projects');

// export function firebaseListener() {
//   let rawData = new Object();
//   pagesRef.on('value', (snapshot) => rawData = snapshot.val());
//   return rawData;
// }
  
  // return new Promise((resolve, reject) => {
  //   if (rawData) {
  //     console.log('Stuff worked!', 'rawData', rawData);
  //     resolve(rawData);
  //   }
  //   else {
  //     reject(console.log('It broke'));
  //   }
  // });
// }


// export const getPages = () => {
//   return pagesRef.on('value', (snapshot) => {
//     const rawData = snapshot.val();


//     return new Promise((resolve, reject) => {
  
//       if (rawData) {
//         console.log('Stuff worked!', 'rawData', rawData);
//         resolve(rawData);
//       }
//       else {
//         reject(console.log('It broke'));
//       }
  
//     });

//   });
  
// };


// export const getPages = () => {
  
//   return new Promise((resolve, reject) => {
//     let rawData = {}, pages = [], categories = [];
  
//     pagesRef.on('value', (snapshot) => {
//       rawData = snapshot.val();
//       console.log('rawData', rawData);
      
//       Object.keys(rawData).forEach(p => {
//         const pageObj = rawData[p];
//         pages.push(pageObj);
//         if (categories.indexOf(pageObj.category) < 0) categories.push(pageObj.category);
//       });
//     });

//     if (pages && categories) {
//       console.log('Stuff worked!');
//       console.log('pages', pages);
//       console.log('categories', categories);
//       resolve({ pages, categories });
//     }
//     else {
//       reject(console.log('It broke'));
//     }

//   });
// };

export default firebase;