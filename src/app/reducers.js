export const FIREBASE_CONFIG = 'FIREBASE_CONFIG';
export const FIREBASE_REF = 'FIREBASE_REF';
export const FETCHED_PAGES = 'FETCHED_PAGES';
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

export const pages = (state = [], { type, payload }) => {
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
      return payload;
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
