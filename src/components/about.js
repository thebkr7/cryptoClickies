import React, { Component } from 'react';
import './components.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div class="modal is-active">
        <div onClick={() => {this.props.toggleAbout()}} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">CryptoClickies Manifesto</p>
            <button onClick={() => {this.props.toggleAbout()}} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <strong>Cryptoclickies</strong> is a gaming experiment based on non-fungible or collectible tokens. Thanks for playing our early <strong>Alpha</strong> version! We hope you’ll stick with us as we continually add new features to the core game, including a back end smart contract that will give you a chance to <strong>earn unique treasures</strong> just for playing! Cryptoclickies is powered by <a href='https://blockgeeks.com/' target='_blank'>Blockgeeks</a>, the number one source for online blockchain education!
          </section>
          <footer class="modal-card-foot">
            <a href="mailto:benji@blockgeeks.com?Subject=CryptoClickies" class="button is-info">Give Feedback</a>
            <button onClick={() => {this.props.toggleAbout()}} class="button">Close</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default About;