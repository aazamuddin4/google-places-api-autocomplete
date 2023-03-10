export const ADD_SEARCH = "ADD_SEARCH";

export const addSearch = search => ({
  type: ADD_SEARCH,
  search
});

export const saveSearch = search => dispatch => {
  dispatch(addSearch(search));
};