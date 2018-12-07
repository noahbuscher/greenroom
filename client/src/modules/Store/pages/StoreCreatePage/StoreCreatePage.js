import React, { Component } from 'react';
import StoreList from '../Store/StoreList';
import DATA from '../data';
import './Explore.css';

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
      <div className="container">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Store name..."
            value={name}
            onChange={this.handleChangeText}
          />
          <input
            type="text"
            name="street"
            placeholder="Store address..."
            value={street}
            onChange={this.handleChangeText}
          />
          <input
            type="text"
            name="city"
            placeholder="Store city..."
            value={city}
            onChange={this.handleChangeText}
          />
          <input
            type="text"
            name="state"
            placeholder="Store state..."
            value={state}
            onChange={this.handleChangeText}
          />
        </form>
      </div>
    );
  }
}

export default StoreCreatePage;
