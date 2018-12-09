import React, { Component } from 'react';

export default class Store extends Component {
  render() {
    const { store } = this.props;

    return (
      <div className="fl w-50 w-25-m w-25-l pr2 pb2">
        <article className="br2 ba b--black-10 w-100 fl pa3">
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">{store.name}</h1>
              </div>
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray">
              {store.street}, {store.city}, {store.state}
            </p>
          </div>
        </article>
      </div>
    );
  }
}
