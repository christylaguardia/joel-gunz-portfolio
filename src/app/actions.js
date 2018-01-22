import Firebase from 'firebase';
import { firebaseUrl } from '../services/firebase';

import { FIREBASE_CONFIG, FIREBASE_REF } from './reducers';

const replaceConfig = config => ({
  type: FIREBASE_CONFIG,
  payload: config
});

export const listenToConfigChanges = () => (dispatch, getState) => {
  const currState = getState();
  const ref = new Firebase(currState.firebase.ref);
  console.log('firebase ref from state', ref);
  
  ref.child('config').on('value', snapshot => {
    dispatch(replaceConfig(snapshot.val()));
  });
};

// export const saveConfig = config => (dispatch, getState) => {
//   const { firebaseRef } = getState();
  
//   firebaseRef.child('config').set(config);
// };

// fetches firebase data
// export const setFirebaseRef = () => dispatch => dispatch({
//   type: FETCHED_PAGES,
//   payload: pagesRef.then(ref => ref.on('value', (snapshot) => snapshot.val()))
// });

// function getData(fbRef) {
//   const ref = new Firebase(fbRef);
//   return ref.on('value', (snapshot) => snapshot.val());
// }

// export const firebaseConfig = () => (dispatch, getState) => {

//   const { firebase } = getState();

//   dispatch({
//     type: FIREBASE_CONFIG,
//     payload: firebase.on('value', (snapshot) => snapshot.val())
//   });
// };



// export const fetchPages = () => dispatch => dispatch({
//   type: FETCHED_PAGES,
//   payload: 'firebaseListener'
// });

// export const fetchPages = () => dispatch => dispatch({
//   type: FETCHED_PAGES,
//   payload: rawData
// });