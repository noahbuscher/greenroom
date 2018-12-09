import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-white black-70 ph3 ph5-ns pv5 pv6-ns bt mt4 b--black-10">
        <div className="mw9 center">
          <div className="mb4 lh-copy">
            <a href="/" className="black-70 link hover-blue b dib mr3 mb3">Home</a>
            <a href="/explore" className="black-70 link hover-blue b dib mr3 mb3">Explore</a>
            <a href="/new" className="black-70 link hover-blue b dib mr3 mb3">Add Listing</a>
          </div>
          <article className="v-top">
            <a
              className="github-button"
              href="https://github.com/noahbuscher/greenroom"
              data-show-count="true"
              aria-label="Star noahbuscher/greenroom on GitHub"
            >
              Star
            </a>
            &nbsp;
            <a
              className="github-button"
              href="https://github.com/noahbuscher/greenroom/fork"
              data-show-count="true"
              aria-label="Fork noahbuscher/greenroom on GitHub"
            >
              Fork
            </a>
          </article>
          <p className="f6 mt4 measure copy fw4 lh-copy">
            Made with <span className="tr" role="img" aria-label="love">💚</span>for Flowhub by Noah Buscher
          </p>
        </div>
      </footer>
    );
  }
}
