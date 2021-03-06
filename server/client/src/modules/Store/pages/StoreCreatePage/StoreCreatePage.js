import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

import { addStoreRequest, requestUploadStore } from '../../StoreActions';

class StoreCreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toExplore: false,
      name: '',
      street: '',
      city: '',
      state: '',
      selectedFile: null,
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectedFile = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }

  handleUpload = () => {
    const { onUpload } = this.props;
    const { selectedFile } = this.state;

    if (!selectedFile) return;

    const data = new FormData();
    data.append('csv', selectedFile, selectedFile.name);

    onUpload(data).then(() => this.setState(() => ({ toExplore: true })));
  }

  handleSubmit() {
    const { onSubmit } = this.props;

    const {
      name,
      street,
      city,
      state,
    } = this.state;

    const store = {
      name,
      street,
      city,
      state,
    };

    let invalid = false;

    if (store.name === '') invalid = true;
    if (store.street === '') invalid = true;
    if (store.city === '') invalid = true;
    if (store.state === '') invalid = true;

    if (!invalid) {
      onSubmit(store).then(() => this.setState(() => ({ toExplore: true })));
    }
  }

  handleChangeText(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      toExplore,
      name,
      street,
      city,
      state,
    } = this.state;

    if (toExplore === true) {
      return <Redirect to="/explore" />;
    }

    return (
      <div>
        <Header />

        <section className="cf ph3 ph5-ns pb3 bg-green black-70">
          <h2 className="f3 f1-ns fw6 mb2 lh-copy">Submit</h2>
          <p className="mv0 f5 pb4 lh-copy measure">
            Add a new dispensary to the database.
          </p>
          <a href="/explore" className="f6 f5-ns fw6 dib ba b--black-20 bg-dark-green white ph3 ph4-ns pv2 pv3-ns br2 mb4 grow no-underline">
            Explore Listings
          </a>
        </section>

        <div className="cf">
          <section className="fl w-100 w-50-ns pa2 ph3 ph5-ns pb5 pv4 bg-white black-70">
            <h2>Add Listing</h2>
            <p className="mv0 f5 pb4 lh-copy measure">
              This is helpful for keeping the database up to date with indivigual
              dispensary entries.
            </p>
            <form noValidate>
              <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">Store Name</label>
                <input
                  id="name"
                  name="name"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="name-desc"
                  value={name}
                  onChange={this.handleChangeText}
                />
              </div>

              <div className="measure">
                <label htmlFor="address" className="f6 b db mb2 mt4">Address</label>
                <input
                  id="street"
                  name="street"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="address-desc"
                  value={street}
                  onChange={this.handleChangeText}
                />
              </div>

              <div className="measure">
                <label htmlFor="city" className="f6 b db mb2 mt4">City</label>
                <input
                  id="city"
                  name="city"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="city-desc"
                  value={city}
                  onChange={this.handleChangeText}
                />
              </div>

              <div className="measure">
                <label htmlFor="state" className="f6 b db mb2 mt4">State</label>
                <input
                  id="state"
                  name="state"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="state-desc"
                  value={state}
                  onChange={this.handleChangeText}
                />
              </div>

              <div className="measure">
                <button
                  className="f6 f5-ns fw6 dib ba b--black-20 bg-dark-green white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline mt4"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </section>

          <section className="fl w-100 w-50-ns pa2 ph3 ph5-ns pb5 pv4 bg-white black-70">
            <h2>Upload CSV</h2>
            <p className="mv0 f5 pb4 lh-copy measure">
              Good for importing large data sets. Make sure your CSV file has
              the following four columns (lowercased):&nbsp;
              <span className="code bg-yellow">name, street, city, state</span>.
            </p>
            <form onSubmit={this.handleUpload}>
              <input
                name="csv"
                id="csv"
                onChange={this.handleSelectedFile}
                type="file"
                accept=".csv"
              />
              <button
                className="f6 f5-ns fw6 dib ba b--black-20 bg-dark-green white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline mt4"
                type="button"
                onClick={this.handleUpload}
              >
                Import
              </button>
            </form>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

StoreCreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addStoreRequest(data)),
  onUpload: data => dispatch(requestUploadStore(data)),
});

export default connect(null, mapDispatchToProps)(StoreCreatePage);
