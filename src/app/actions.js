import { FETCHED_PAGES, LOADED } from './reducers';
// import firebaseApi from '../services/firebaseApi';
// import { pagesRef, pagesData } from '../services/firebase';

// export const fetchPages = () => dispatch => dispatch({
//   type: FETCHED_PAGES,
//   payload: pagesRef.on('value', (snapshot) => snapshot.val())
//     .then(pages => {
//       dispatch({ type: LOADED });
//       return pages;
//     })
// });

// export const fetchPages = () => dispatch => dispatch({
//   type: FETCHED_PAGES,
//   payload: pagesData //pagesRef.on('value', (snapshot) => snapshot.val())
// });

// export const fetchPages = () => ({
//   type: FETCHED_PAGES,
//   payload: pagesData
// });