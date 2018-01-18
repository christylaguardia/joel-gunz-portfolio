import { FETCHED_PAGES } from './reducers';
import { pagesRef } from '../services/firebase';

const pagesData = pagesRef.on('value', (snapshot) => snapshot.val());
console.log('pagesData', pagesData);

export const fetchPages = () => dispatch => dispatch({
  type: FETCHED_PAGES,
  payload: pagesData
});