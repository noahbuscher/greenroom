import React, { Component } from 'react';
import StoreList from '../../components/StoreList';
import './StoreExplorePage.css';

class StoreExplorePage extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  render() {
    return (
      <div className="container">
        <div className="stores">
          <h2>Stores</h2>
        </div>
      </div>
    );
  }
}

export default StoreExplorePage;
