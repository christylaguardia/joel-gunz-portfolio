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

export const loading = (state = false, { type, payload }) => {
  switch (type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
};
