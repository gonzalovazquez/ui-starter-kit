import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
/** Material UI Components */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
/** Custom Components */
import todoAPI from '../../api/todo';
import Todo from '../../components/Todo/Todo';
import { saveState, loadState } from '../../tools/localStorage';

/**
 * Home
 * Fetches todos and renders component
 */
function Home() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dense] = useState(true);
  // Fetch todos from API
  const fetchData = async () => {
    setIsLoading(true);
    const result = await todoAPI();
    setTodos(result);
    setIsLoading(false);
  };
  // Call Todos on load
  useEffect(() => {
    const todosFromMemory = loadState();
    // Load todos from Session Storage if available
    if (todosFromMemory) {
      setTodos(todosFromMemory);
    } else {
      fetchData();
    }
  }, []);
  // Save data to Session Storage
  useEffect(() => {
    if (todos.length > 1) {
      saveState(todos);
    }
  }, [todos]);
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            All Todos
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
        <List dense={dense}>
            {isLoading ? <CircularProgress />
              : <Todo
                todos={todos}
                deleteTodo={id => setTodos(todos.filter(itm => itm.id !== id))}
              />
          }
        </List>
        </Grid>
      </Grid>
    </div>
  );
}

/**
 * propTypes
 * @property {function} todoAPI - API to retrieve Todos.
 */
Home.propTypes = {
  todoAPI: PropTypes.func,
};

export default Home;
