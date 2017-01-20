import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Root.propTypes = {
  store: {
    people: {
      isFetching: PropTypes.boolean,
      next: PropTypes.string,
      people: PropTypes.array,
    },
  },
  // keeps throwing airBNB error here but not sure
  // how to get around this one....
  history: {},
};

Root.defaultProps = {
  store: {
    people: {},
  },
  history: {},
};

export default Root;
