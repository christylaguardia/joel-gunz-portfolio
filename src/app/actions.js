import { FETCHED_DATA, LOGIN, LOGOUT } from './reducers';
import { pagesRef, feedsRef, auth } from '../services/firebase';

const getDataSnapshot = (ref) => ref.once('value').then(snapshot => snapshot.val());

export const fetchData = () => dispatch => dispatch({
  type: FETCHED_DATA,
  payload: Promise.all([
    getDataSnapshot(pagesRef),
    getDataSnapshot(feedsRef)
  ]).then(data => {
    return {
      pages: data[0],
      feeds: data[1]
    };
  })
});

export const login = (email, password) => ({
  type: LOGIN,
  payload: auth.signInWithEmailAndPassword(email, password)
    .then(res => res.getIdToken(true))
    .then(token => token)
    .catch(err => alert(err.message))
});

export const logout = () => ({
  type: LOGOUT,
  payload: auth.signOut()
});