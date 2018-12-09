import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { requestUpdateStore } from '../StoreActions';

class Store extends Component {
  constructor(props) {
    super(props);

    const { store } = this.props;

    this.state = {
      store,
      statusColor: getStatusColor(store.status),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getInfoUrl() {
    const { store } = this.props;
    const q = encodeURI(`${store.street}, ${store.city}, ${store.state}`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }

  handleChange(event) {
    const { dispatch } = this.props;
    const stateStore = this.state.store;

    const store = Object.assign({}, stateStore);
    store.status = event.target.value;

    this.setState({ store: store, statusColor: getStatusColor(event.target.value) }, () => {
      dispatch(requestUpdateStore(this.state.store));
    });
  }

  render() {
    const { store } = this.props;
    const { statusColor } = this.state;
    const stateStore = this.state.store;

    return (
      <div className="fl w-50 w-25-m w-25-l pr2 pb2 relative">
        <article className="br2 ba b--black-10 w-100 h5 fl">
          <div className={`db w-100 br2 br--top pa1 pl3 pr3 ${statusColor}`}>
            <h2 className="f5 fw5 black-70 w-100">
              {store.city}, {store.state}
              {stateStore.status === 'onboarded' && (
                <span className="tr" role="img" aria-label="Liftoff"> 🚀</span>
              )}
            </h2>
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
            <div className="absolute bottom-0 left-0 right-0 pa1 pl3 pr3 pb3">
              <a
                href={this.getInfoUrl()}
                className="f7 link dim br2 ba ph3 pv2 mb2 dib dark-green mr2"
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn More
              </a>
              <select
                value={stateStore.status}
                onChange={this.handleChange}
                className="ml3"
              >
                <option value="Uncontacted">Uncontacted</option>
                <option value="Cold">Cold</option>
                <option value="Warm">Warm</option>
                <option value="Hot">Hot</option>
                <option value="Onboarded">Onboarded</option>
                <option value="Uninterested">Uninterested</option>
              </select>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

function getStatusColor(state) {
  switch (state) {
    case 'uncontacted':
      return 'bg-light-gray';
    case 'cold':
      return 'bg-lightest-blue';
    case 'warm':
      return 'bg-orange';
    case 'hot':
      return 'bg-red';
    case 'onboarded':
      return 'bg-green';
    case 'uninterested':
      return 'bg-light-purple';
    default:
      return 'bg-light-gray';
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
