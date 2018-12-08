import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="w-100 pa3 ph5-ns bg-white">
        <div className="db dt-ns mw9 center w-100">
          <div className="db dtc-ns v-mid tl w-50">
            <a href="#" className="dib f5 f4-ns fw6 mt0 mb1 link black-70">
              Greenroom
            </a>
          </div>
          <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
            <a href="#" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
              Explore
            </a>
            <a href="#" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
              Map
            </a>
            <a href="#" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
              Add Listing
            </a>
          </nav>
        </div>
      </header>
    );
  }
}
