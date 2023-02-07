import { ADD_SEARCH } from "./actions";

const initialState = {
    searches: []
  };
  
  export default function searchReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_SEARCH:
        return {
          ...state,
          searches: [...state.searches, action.search]
        };
      default:
        return state;
    }
  }