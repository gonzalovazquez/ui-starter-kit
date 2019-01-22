import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const ContextType = {
  routes: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return React.Children.only(
      <MuiThemeProvider theme={this.props.context.theme}>
        <CssBaseline /> {/* The rest of your application */}
        <Router>{renderRoutes(this.props.context.routes[0].routes)}</Router>
      </MuiThemeProvider>,
    );
  }
}

export default App;
