import { combineReducers } from 'redux';
import { firebase, pages, loading } from '../app/reducers';

export default combineReducers({
  firebase, 
  pages,
  loading
});