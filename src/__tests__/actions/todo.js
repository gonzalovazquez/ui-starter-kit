import chai from 'chai';
import {
  todoIsLoading,
  todohasError,
  todoIsSuccessful,
  removeTodoFromTodos,
} from '../../action/todo';

import {
  TODO_IS_LOADING,
  TODO_HAS_ERROR,
  TODO_IS_SUCCESSFUL,
  TODO_TO_REMOVE,
} from '../../constants';

const { expect } = chai;


describe('actions', () => {
  it('todoIsLoading', () => {
    expect(todoIsLoading().type).to.equal(TODO_IS_LOADING);
    expect(todoIsLoading(true).isLoading).to.equal(true);
  });

  it('todohasError', () => {
    expect(todohasError().type).to.equal(TODO_HAS_ERROR);
    expect(todohasError(true).hasErrored).to.equal(true);
  });

  it('todoIsSuccessful', () => {
    const todos = [{ todo: 1, todo1: 2 }];
    expect(todoIsSuccessful().type).to.equal(TODO_IS_SUCCESSFUL);
    expect(todoIsSuccessful(todos).items).to.equal(todos);
  });

  it('removeTodoFromTodos', () => {
    const todo = { title: 'fake' };
    const todoRemovedAction = removeTodoFromTodos(todo);
    const expectedAction = { type: TODO_TO_REMOVE, item: todo };
    expect(todoRemovedAction).to.deep.equal(expectedAction);
  });
});
