import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
            <a href="/new" className="f6 f5-ns fw6 dib ba b--white-90 white-90 ph3 ph4-ns pv2 pv3-ns br2 ml3 grow no-underline">
              Add Listing
            </a>
          </div>
        </section>

        <div className="tl bt b--black-10 pa3 pa5-ns bg-white black-70" id="principles">
          <div className="mw9 center">
            <h1 className="f5 ttu tracked fw6">Features</h1>
            <section className="lh-copy">
              <div className="cf">
                <article className="fl pv2 w-100 w-third-l pr4-l">
                  <h2 className="f5 f4-ns fw6 mb0"> Lead Tracking</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    You can track the status of your leads without even leaving
                    the comfort of Greenroom. How easy is that?
                  </p>
                </article>
                <article className="pv2 fl w-100 w-third-l ph3-l">
                  <h2 className="f5 f4-ns fw6 mb0">CSV Upload</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    Have a lot of dispensaries to import? No worries. We provide
                    a simple CSV upload schema to get you going faster.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-third-l pl4-l">
                  <h2 className="f5 f4-ns  fw6 mb0">Research</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    We integrate with Google Maps to help you find phone numbers
                    and even hours of operation just from an address.
                  </p>
                </article>
              </div>
              <div className="cf w-100">
                <article className="pv2 fl w-100 w-third-l pl0 pr4-l">
                  <h2 className="f5 f4-ns fw6 mb0">Mobile</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    Need to track leads in the field? No problem - Greenroom
                    is mobile-ready to help you take on the world.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-third-l ph3-l">
                  <h2 className="f5 f4-ns  fw6 mb0">Advanced Filters</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    You can filter stores by city, state, and status, allowing
                    you to find what you are looking for.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-third-l pl4-l">
                  <h2 className="f5 f4-ns fw6 mb0">Open Source</h2>
                  <p className="f6 f5-ns measure lh-copy mt0">
                    Built using modern web tools like React, MongoDB, and Node,
                    creating new featres is as easy as making a pull request.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </div>

        <Footer />
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
