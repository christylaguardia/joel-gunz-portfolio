import { combineReducers } from 'redux';
import { pages, loading } from '../app/reducers';

export default combineReducers({
  pages,
  loading
});