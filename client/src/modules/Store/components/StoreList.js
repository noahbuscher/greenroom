import React, { Component } from 'react';
import Store from './Store';

export default class StoreList extends Component {
  render() {
    const { stores } = this.props;
    return (
      <div className="center cf">
        {stores.map((store) => (
          <Store key={store.cuid} store={store} />
        ))}
      </div>
    );
  }
}
