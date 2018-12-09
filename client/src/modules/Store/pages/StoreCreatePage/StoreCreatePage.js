import React, { Component } from 'react';
import Header from '../../../../components/Header/Header';

class StoreCreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      street: '',
      city: '',
      state: '',
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleSubmit() {
    const {
      name,
      street,
      city,
      state,
    } = this.state;

    // Submit new store
  }

  handleChangeText(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      name,
      street,
      city,
      state,
    } = this.state;

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
              <label for="name" className="f6 b db mb2">Store Name</label>
              <input
                id="name"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="name-desc"
                value={name}
                onChange={this.handleChangeText}
              />
              <small id="name-desc" className="f6 black-60 db mb2">Ex: 303 Dispensary</small>
            </div>

            <div className="measure">
              <label for="address" className="f6 b db mb2">Address</label>
              <input
                id="street"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="address-desc"
                value={street}
                onChange={this.handleChangeText}
              />
              <small id="address-desc" className="f6 black-60 db mb2">Ex. 417 Wewatta Street</small>
            </div>

            <div className="measure">
              <label for="city" className="f6 b db mb2">City</label>
              <input
                id="city"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="city-desc"
                value={city}
                onChange={this.handleChangeText}
              />
              <small id="city-desc" className="f6 black-60 db mb2">Ex: Denver</small>
            </div>

            <div className="measure">
              <label for="state" className="f6 b db mb2">State</label>
              <input
                id="state"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="state-desc"
                value={state}
                onChange={this.handleChangeText}
              />
              <small id="state-desc" className="f6 black-60 db mb2">Ex: Colorado</small>
            </div>
            <div className="measure">
              <button className="f6 f5-ns fw6 dib ba b--black-20 bg-dark-green white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default StoreCreatePage;
