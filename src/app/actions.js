import { FETCHED_PAGES } from './reducers';

export const fetchData = data => dispatch => dispatch({
  type: FETCHED_PAGES,
  payload: data
});