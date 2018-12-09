import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../../../components/Header/Header';

import { addStoreRequest } from '../../StoreActions';

class StoreCreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toExplore: false,
      name: '',
      street: '',
      city: '',
      state: '',
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    onSubmit(store).then(() => this.setState(() => ({ toExplore: true })));
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
        </section>

        <section className="cf ph5-ns pb5 pv4 bg-white black-70">
          <form>
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
              <small id="name-desc" className="f6 black-60 db mb2">Ex: 303 Dispensary</small>
            </div>

            <div className="measure">
              <label htmlFor="address" className="f6 b db mb2">Address</label>
              <input
                id="street"
                name="street"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="address-desc"
                value={street}
                onChange={this.handleChangeText}
              />
              <small id="address-desc" className="f6 black-60 db mb2">Ex. 417 Wewatta Street</small>
            </div>

            <div className="measure">
              <label htmlFor="city" className="f6 b db mb2">City</label>
              <input
                id="city"
                name="city"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="city-desc"
                value={city}
                onChange={this.handleChangeText}
              />
              <small id="city-desc" className="f6 black-60 db mb2">Ex: Denver</small>
            </div>

            <div className="measure">
              <label htmlFor="state" className="f6 b db mb2">State</label>
              <input
                id="state"
                name="state"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="state-desc"
                value={state}
                onChange={this.handleChangeText}
              />
              <small id="state-desc" className="f6 black-60 db mb2">Ex: Colorado</small>
            </div>
            <div className="measure">
              <button
                className="f6 f5-ns fw6 dib ba b--black-20 bg-dark-green white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline"
                type="button"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

StoreCreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addStoreRequest(data)),
});

export default connect(null, mapDispatchToProps)(StoreCreatePage);
