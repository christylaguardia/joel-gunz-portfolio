import { combineReducers } from 'redux';
import { loading, error, data, user } from '../app/reducers';

export default combineReducers({
  loading,
  error,
  data,
  user
});