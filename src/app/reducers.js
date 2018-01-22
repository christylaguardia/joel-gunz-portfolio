export const FIREBASE_CONFIG = 'FIREBASE_CONFIG';
export const FIREBASE_REF = 'FIREBASE_REF';
export const FETCHED_PAGES = 'FETCHED_PAGES';
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

// export const firebaseConfig = (state = '', { type, payload }) => {
//   switch (type) {
//     case FIREBASE_CONFIG:
//       return payload; //Object.assign({}, payload.value);
//     default:
//       return state; 
//   }
// };

export const firebase = (state = {}, { type, payload }) => {
  switch (type) {
    case FIREBASE_REF:
      return { ...state, ref: payload };
    default:
      return state;
  }
};

export const pages = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCHED_PAGES:
      return payload;
    default:
      return state;
  }
};

export const categories = (state = [], { type, payload }) => {
  switch (type) {
    case FETCHED_PAGES:
      return payload,categories;
    default:
      return state;
  }
};

export const loading = (state = false, { type }) => {
  switch (type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
};
