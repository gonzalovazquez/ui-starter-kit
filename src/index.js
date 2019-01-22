import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';

import App from './components/App';
import routes from './routes';

/**
 * Define theme for starter-kit
 * Documentation: https://material-ui.com/customization/themes/
 * Colour Pallet: https://color.adobe.com/create/color-wheel/
 */
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

/**
 * Define context for Application
 */
const context = {
  routes,
  theme,
};

/**
 * Mount Point object
 */
const mountPoint = document ? document.getElementById('root') : null;

ReactDOM.render(<App context={context} />, mountPoint);
