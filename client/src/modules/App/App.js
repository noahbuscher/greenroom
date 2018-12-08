import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="cf ph3 ph5-ns pb5 bg-green black-70">
        <h1 className="f4 f1-ns fw6 mb2">Greenroom</h1>
        <h2 className="f6 fw2 ttu tracked">Cannabis Dispensary Database</h2>
      </section>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps() {
  return {

  };
}

export default connect(mapStateToProps)(App);
