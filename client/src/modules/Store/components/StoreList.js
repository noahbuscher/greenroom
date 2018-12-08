import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Store from './Store';
import { fetchStores } from '../StoreActions';

export default class StoreList extends Component {
  render() {
    return (
    <ul>
        {this.props.stores.map((store, i) => (
          <li key={i}>{store.name}</li>
        ))}
      </ul>
    );
  }
}
