import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Store extends Component {
  getInfoUrl() {
    const { store } = this.props;
    const q = encodeURI(`${store.street}, ${store.city}, ${store.state}`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }

  render() {
    const { store } = this.props;

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
            </div>
          </div>
        </article>
      </div>
    );
  }
}

Store.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};
