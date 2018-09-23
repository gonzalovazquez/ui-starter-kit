/* eslint no-unused-vars: 0 */
import Todo from '../components/Todo/Todo';

/**
 * Global Routes
 */
export default [
  {
    component: Todo,
    routes: [
      {
        path: '/',
        exact: true,
        component: Todo,
      },
    ],
  },
];
