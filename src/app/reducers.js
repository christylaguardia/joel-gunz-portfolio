export const LOADING = 'LOADING';
export const LOADED = 'LOADED';
export const FETCHED_DATA = 'FETCHED_DATA';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ERROR = 'ERROR';

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

export const error = (state = null, { type, payload }) => {
  switch (type) {
    case ERROR:
      return payload;
    default:
      return state;
  }
};

export const data = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCHED_DATA:
      return payload;
    default:
      return state;
  }
};

export const user = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return payload;
    case LOGOUT:
      return undefined;    
    default:
      return state;
  }
};