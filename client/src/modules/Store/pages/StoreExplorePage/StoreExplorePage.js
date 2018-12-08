import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreList from '../../components/StoreList';
import Header from '../../../../components/Header/Header';
import '../../../../index.css';

// Import Selectors
import { fetchStores } from '../../StoreActions';

class StoreExplorePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchStores());
  }

  render() {
    const { stores } = this.props;
    return (
      <div>
        <Header />
        <section className="cf ph3 ph5-ns pb3 bg-green black-70">
          <h2 className="f3 f1-ns fw6 mb2 lh-copy">Explore</h2>
          <p className="mv0 f5 pb4 lh-copy measure">
            Browse dispensaries by city and state.
          </p>
        </section>

        <section className="cf ph5-ns pb5 pv4 bg-white black-70">
          <h2>Recently Updated</h2>
          {stores.locations.length > 0 && (
            <StoreList stores={stores.locations} />
          )}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stores: state.stores,
  };
}

export default connect(mapStateToProps)(StoreExplorePage);
