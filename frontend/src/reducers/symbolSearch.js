import { SET_SYMBOL_SEARCH_CONTENT } from 'src/actions/symbolSearch';

export default (state = '', action = {}) => {
  switch (action.type) {
    case SET_SYMBOL_SEARCH_CONTENT: {
      return action.newContent;
    }

    default: {
      return state;
    }
  }
};
