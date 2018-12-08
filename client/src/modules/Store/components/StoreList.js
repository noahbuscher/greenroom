import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Store from './Store';

export default class StoreList extends Component {
  render() {
    const { stores } = this.props;
    return (
      <div className="flex flex-wrap">
        {stores.map((store) => (
          <Store key={store.cuid} store={store} />
        ))}
      </div>
    );
  }
}
