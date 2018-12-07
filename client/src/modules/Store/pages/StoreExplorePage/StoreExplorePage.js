import React, { Component } from 'react';
import StoreList from '../Store/StoreList';
import DATA from '../data';
import './Explore.css';

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
          <StoreList data={DATA} />
        </div>
      </div>
    );
  }
}

export default StoreExplorePage;
