import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchListofTodos, removeTodoFromTodos } from '../../action/todo';
import Todo from '../../components/Todo/Todo';

/**
 * Home
 * Fetches todos and renders component
 * @class Home
 * @extends {Component}
 */
class Home extends React.Component {
  /**
   * Fetches todo onLoad.
   */
  componentDidMount() {
    this.props.getTodos();
  }

  /**
   * Returns lists of todos my iterating over array.
   * @return {ReactElement} markup
   */
  render() {
    const deleteTodo = (todo) => {
      this.props.removeTodo(todo);
    };
    return (
      <Todo
        isLoading={this.props.isLoading}
        deleteTodo={deleteTodo}
        todos={this.props.todos}
      />
    );
  }
}

/**
 * Connects todo state to properties
 * @param {object} state - User state.
 */
const mapStateToProps = state => ({
  hasError: state.todo.hasErrored,
  isLoading: state.todo.isLoading,
  todos: state.todo.todos,
});

/**
 * Event for retriving Todos
 * @param {function} dispatch - Fires event.
 */
const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(fetchListofTodos()),
  removeTodo: todo => dispatch(removeTodoFromTodos(todo)),
});

/**
 * propTypes
 * @property {array} todos - Array of all the todos.
 * @property {boolean} hasError - Flag if there is an error.
 * @property {boolean} isLoading - Flag when request is loading.
 * @property {function} getTodos - Function to fetch todos.
 * @property {function} removeTodo - Function to revmove Todo.
 */
Home.propTypes = {
  todos: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  getTodos: PropTypes.func,
  removeTodo: PropTypes.func,
};

/**
 * Connects to Redux.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home);
