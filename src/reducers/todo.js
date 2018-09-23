/**
 * initialState
 * Object that defines the initial state.
 */
import {
  TODO_IS_LOADING,
  TODO_HAS_ERROR,
  TODO_IS_SUCCESSFUL,
  TODO_TO_REMOVE,
} from '../constants';

const initialState = {
  todos: [],
  hasErrored: false,
  isLoading: false,
  isSuccessful: false,
};

/**
 * Reducer for todo state.
 * @param {object} state - The initial state defined.
 * @param {string} action - The action that triggers a new state.
 * @return {object} A new immutable state.
 */
export default function todo(state = initialState, action) {
  switch (action.type) {
    case TODO_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case TODO_HAS_ERROR:
      return {
        ...state,
        hasErrored: action.hasErrored,
      };
    case TODO_IS_SUCCESSFUL:
      /**
       * We want to avoid mutating the original array.
       * What we do is concatinate to the copy and avoid mutation.
       * http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
       */
      return {
        ...state,
        todos: state.todos.concat(action.items),
      };
    case TODO_TO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter(itm => itm.title !== action.item.title),
      };
    default:
      return state;
  }
}
