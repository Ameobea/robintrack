import { SET_SYMBOL_SEARCH_CONTENT } from 'src/actions/symbolSearch';

export default (state = '', action = {}) => {
  if (action.type === SET_SYMBOL_SEARCH_CONTENT) {
    return action.newContent.toUpperCase();
  } else {
    return state;
  }
};
