import { LOADING, LOADED } from '../app/reducers';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => async action => {
  console.log('promiseMiddleware');
  // check if payload is a promise
  if (!isPromise(action.payload)) return next(action);
  
  const { type, payload } = action;
  dispatch({ type: LOADING });

  try {
    const result = await payload;
    dispatch({ type: LOADED });
    dispatch({ type, payload: result });
    return result;
  } catch (err) {
    // TODO:
    // dispatch({ type: 'ERROR', payload: err });
    throw err;
  }
};