import { FETCHED_DATA, LOGIN } from './reducers';
import { pagesRef, auth } from '../services/firebase';

export const fetchData = () => dispatch => dispatch({
  type: FETCHED_DATA,
  payload: pagesRef.once('value')
    .then(snapshot => {
      // get firebase data
      const rawData = snapshot.val();
      const keys = Object.keys(rawData);
      
      // convert data to arrays
      let pages = [];
      let categories = [];
      
      keys.forEach(k => {
        let page = rawData[k];
        // use key for the route path
        page.pathname = k;
        pages.push(page);
        // get unique categories
        if (categories.indexOf(page.category) === -1) categories.push(page.category);
      });
      
      // sort by sequence num
      pages.sort((a, b) => a.sequence > b.sequence);
      
      return {
        pages: pages,
        categories: categories
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