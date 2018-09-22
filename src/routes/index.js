/* eslint no-unused-vars: 0 */
import MainViewer from '../components/MainViewer/MainViewer';

/**
 * Global Routes
 */
export default [
  {
    component: MainViewer,
    routes: [
      {
        path: '/',
        exact: true,
        component: MainViewer,
      },
    ],
  },
];
