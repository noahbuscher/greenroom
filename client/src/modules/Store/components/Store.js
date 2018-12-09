import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { requestUpdateStore } from '../StoreActions';

class Store extends Component {
  constructor(props) {
    super(props);

    const { store } = this.props;

    this.state = store;

    this.handleChange = this.handleChange.bind(this);
  }

  getInfoUrl() {
    const { store } = this.props;
    const q = encodeURI(`${store.street}, ${store.city}, ${store.state}`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }

  handleChange(event) {
    const { dispatch } = this.props;

    this.setState({ status: event.target.value }, () => {
      dispatch(requestUpdateStore(this.state));
    });
  }

  render() {
    const { store } = this.props;
    const { status } = this.state;

    return (
      <div className="fl w-50 w-25-m w-25-l pr2 pb2">
        <article className="br2 ba b--black-10 w-100 fl">
          <div className="db w-100 br2 bg-light-gray br--top pa1 pl3 pr3">
            <h2 className="f5 black-70">{store.city}, {store.state}</h2>
          </div>
          <div className="pa2 ph3-ns pb3-ns pa3">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">{store.name}</h1>
              </div>
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray">
              {store.street}, {store.city}, {store.state}
            </p>
            <div>
              <a
                href={this.getInfoUrl()}
                className="f7 link dim br1 ba ph3 pv2 mb2 dib dark-green"
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn More
              </a>
              <select
                value={status}
                onChange={this.handleChange}
                className="ml3"
              >
                <option value="uncontacted">Uncontacted</option>
                <option value="cold">Cold</option>
                <option value="warm">Warm</option>
                <option value="hot">Hot</option>
                <option value="onboarded">Onboarded</option>
                <option value="uninterested">Uninterested</option>
              </select>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

Store.propTypes = {
  dispatch: PropTypes.func.isRequired,
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default Store;
