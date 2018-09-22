import todo from '../api/todo';

import {
  TODO_IS_LOADING,
  TODO_HAS_ERROR,
  TODO_IS_SUCCESSFUL,
  TODO_TO_REMOVE
} from '../constants';


/**
 * Action creater that handles loading state.
 * @param {boolean} bool - Flag of loading state.
 * @return {object} New state.
 */
export const todoIsLoading = bool => ({
  type: TODO_IS_LOADING,
  isLoading: bool,
});


/**
 * Action creater that handles error state.
 * @param {boolean} bool - Flag of error in request.
 * @return {object} New state.
 */
export const todohasError = bool => ({
  type: TODO_HAS_ERROR,
  hasErrored: bool,
});


/**
 * Action creater that returns a new list of todos.
 * @param {object} items - Todos.
 * @return {object} New state.
 */
export const todoIsSuccessful = items => ({
  type: TODO_IS_SUCCESSFUL,
  items,
});


/**
 * Action creater that removes a todo from list of todos.
 * @param {object} item - Todo.
 * @return {object} New state.
 */
export const removeTodoFromTodos = item => ({
  type: TODO_TO_REMOVE,
  item,
});

/**
 * Fetches a fake list of TODO.
 * If there is an error, it will call the todoHasError
 * @return {function} Triggers action creators
 */
export const fetchListofTodos = () => async dispatch => {
  dispatch(todoIsLoading(true));
  try {
    dispatch(todoIsSuccessful(await todo()));
    dispatch(todoIsLoading(false));
  } catch (err) {
    dispatch(todoIsLoading(false));
    dispatch(todohasError(true));
    throw err;
  }
};
