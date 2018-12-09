/**
* Root Component
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Import Routes
import routes from './routes';

export default function App(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      {routes}
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
