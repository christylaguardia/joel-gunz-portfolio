import { combineReducers } from 'redux';
import { loading, error, data, token } from '../app/reducers';

const publicReducers = combineReducers({
  loading,
  error,
  data,
  token
});

// const publicReducers = combineReducers({

// });

// const rootReducer = (state, action) => {
//   if (action.type === LOGOUT) token = null;
//   return publicReducers(state, action);
// };

export default publicReducers;