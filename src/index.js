import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configureStore';

import App from './components/App';
import routes from './routes';

/**
 * Define context for Application
 */
const context = {
  store,
  routes,
};

/**
 * Mount Point object
 */
const mountPoint = document ? document.getElementById('root') : null;

ReactDOM.render(<App context={context} />, mountPoint);
