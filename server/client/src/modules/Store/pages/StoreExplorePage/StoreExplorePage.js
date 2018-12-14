import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StoreList from '../../components/StoreList';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import '../../../../index.css';

// Import Selectors
import { fetchStores } from '../../StoreActions';

class StoreExplorePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        city: 'all',
        state: 'all',
        status: 'all',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchStores(this.state.filters));
  }

  handleChange(event) {
    const { dispatch } = this.props;
    const stateFilters = this.state.filters;

    const filters = Object.assign({}, stateFilters);
    filters[event.target.name] = event.target.value;

    this.setState({ filters: filters }, () => {
      dispatch(fetchStores(this.state.filters));
    });
  }


  render() {
    const { stores, dispatch } = this.props;
    const fields = stores.fields || { state: [], city: [], status: [] };
    const { filters } = this.state;

    return (
      <div>
        <Header />
        <section className="cf ph3 ph5-ns pb3 bg-green black-70">
          <h2 className="f3 f1-ns fw6 mb2 lh-copy">Explore</h2>
          <p className="mv0 f5 pb4 lh-copy measure">
            Browse dispensaries by city and state.
            If you don&#39;t see one you&#39;re looking for, you can add a new
            listing.
          </p>
          <a href="/new" className="f6 f5-ns fw6 dib ba b--black-20 bg-dark-green white ph3 ph4-ns pv2 pv3-ns br2 mb4 grow no-underline">
            New Listing
          </a>
        </section>

        <section className="cf ph5-ns ph3 pv4 bg-light-gray black-70">
          <h4>Sort Listings</h4>
          <div className="pb3">
            <div className="db dib-ns">
              <label htmlFor="state" className="f6 mb2 mr2">State:</label>
              <select className="mr3" id="state" name="state" value={filters.state} onChange={this.handleChange}>
                <option value="all">All</option>
                {fields.state.map(function(o){
                  return <option value={o} key={o}>{o}</option>;
                })}
              </select>
            </div>

            <div className="db-ns dib-ns">
              <label htmlFor="city" className="f6 mb2 mr2">City:</label>
              <select className="mr3" id="city" name="city" value={filters.city} onChange={this.handleChange}>
                <option value="all">All</option>
                {fields.city.map(function(o){
                  return <option value={o} key={o}>{o}</option>;
                })}
              </select>
            </div>

            <div className="db-ns dib-ns">
              <label htmlFor="status" className="f6 mb2 mr2">Status:</label>
              <select className="mr3" id="status" name="status" value={filters.status} onChange={this.handleChange}>
                <option value="all">All</option>
                {fields.status.map(function(o){
                  return <option value={o} key={o}>{o}</option>;
                })}
              </select>
            </div>
          </div>
        </section>

        <section className="cf ph3 ph5-ns pv4 bg-white black-70">
          <h2>Recently Updated</h2>
          <pre className="pb3">{stores.locations.length} Entries Loaded</pre>
          {stores.locations.length > 0 && (
            <StoreList stores={stores.locations} dispatch={dispatch} />
          )}
        </section>

        <Footer />
      </div>
    );
  }
}

StoreExplorePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  stores: PropTypes.shape({
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        cuid: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    stores: state.stores,
  };
}

export default connect(mapStateToProps)(StoreExplorePage);
