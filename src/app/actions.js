import { FETCHED_PAGES, LOADING } from './reducers';
import { getPages } from '../services/firebase';

// TODO: this is not working
// export const fetchPages = () => dispatch => dispatch({
//   type: FETCHED_PAGES,
//   payload: getPages().then(pages => pages)
// });

export const fetchPages = (pages) => dispatch => dispatch({
  type: FETCHED_PAGES,
  payload: pages
});