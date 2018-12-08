import React, { Component } from 'react';
import StoreList from '../../components/StoreList';
import Header from '../../../../components/Header/Header';
import '../../../../css/app.css';

class StoreExplorePage extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <Header />
        <section className="cf ph3 ph5-ns pb3 bg-green black-70">
          <h2 className="f3 f1-ns fw6 mb2 lh-copy">Explore</h2>
          <p className="mv0 f5 pb4 lh-copy measure">
            Browse dispensaries by city and state.
          </p>
        </section>

        <section className="cf ph3 ph5-ns pb5 pv5 bg-white black-70">
          <h2>Recently Updated</h2>
        </section>
      </div>
    );
  }
}

export default StoreExplorePage;
