import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import '../../index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <section className="cf ph3 ph5-ns pb5 bg-green black-70">
          <div className="pa3">
            <h1 className="f4 pt3 f1-ns fw6 mb2">Greenroom</h1>
            <h2 className="f6 fw2 pb3 ttu tracked">For Flowhub</h2>
            <p className="mv0 f5 pb4 lh-copy measure">
              Greenroom picks up where online review sites leave off, providing
              an exhaustive, unbiased listing of legal cannabis dispensaries through
              crowdsourcing and curation.
            </p>
            <a href="/explore" className="f6 f5-ns fw6 dib ba b--black-20 bg-dark-green white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline">
              Explore Stores
            </a>
          </div>
        </section>
        <section className="cf ph3 ph5-ns pb5 bg-white black-70">
          <div className="pa3">
            <h1 className="mt0 f5 f3-ns pt5">Why?</h1>
            <p className="mv0 f5 pb4 lh-copy measure">
              Greenroom picks up where online review sites leave off, providing
              an exhaustive, unbiased listing of legal cannabis dispensaries through
              crowdsourcing and curation.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps() {
  return {

  };
}

export default connect(mapStateToProps)(App);
