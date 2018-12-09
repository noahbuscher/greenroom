import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Store from './Store';

export default class StoreList extends Component {
  render() {
    const { stores } = this.props;
    return (
      <div className="center cf">
        {stores.map(store => (
          <Store key={store.cuid} store={store} />
        ))}
      </div>
    );
  }
}

StoreList.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};
