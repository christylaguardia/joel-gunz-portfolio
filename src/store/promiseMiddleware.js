import { LOADING, LOADED } from '../app/reducers';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => async action => {
  if (!isPromise(action.payload)) return next(action);
  
  const { type, payload } = action;
  
  dispatch({ type: LOADING });

  try {
    const result = await payload;
    console.log('result in middleware', result);
    dispatch({ type: LOADED });
    dispatch({ type, payload: result });
    return result;
  } catch (err) {
    // dispatch({ type: 'ERROR', payload: err });
    console.log('ERROR', err);
    throw err;
  }
};

// import { LOADING, LOADED } from '../app/reducers';

// const isPromise = val => {
//   return val && typeof val.then === 'function';
// };

// export default ({ dispatch }) => next => async action => {

//   if (!isPromise(action.payload)) return next(action);

//   // do our special promise work
//   const { type, payload } = action;
//   console.log('action in the promise middleware', action);
//   dispatch({ type: LOADING });

//   try {
//     const result = await payload;

//     dispatch({ type: LOADED });

//     dispatch({
//       type,
//       payload: result
//     });

//     return result;
//   }
//   catch (err) {
//     // dispatch(createNotification('ERROR', err));
//     console.log(err);
//     throw err;
//   }
// };