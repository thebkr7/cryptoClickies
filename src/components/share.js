import React, { Component } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon
} from 'react-share';
import './components.scss';

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div class="modal is-active">
        <div onClick={() => {this.props.toggleShare()}} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Get 2x Per Click For Sharing</p>
            <button onClick={() => {this.props.toggleShare()}} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <div className='columns'>
              <div className='column is-4'>
              </div>
              <a className='column' onClick={() => {this.props.sharedReward()}}>
                <TwitterShareButton 
                  url='https://cryptoclickies.com/'
                  title='Mining Free Tokens Game in CryptoClickies!'
                >
                  <TwitterIcon
                    size={64}
                    round
                  />
                </TwitterShareButton>
              </a>
              <a className='column' onClick={() => {this.props.sharedReward()}}>
                <FacebookShareButton 
                  url='https://cryptoclickies.com/'
                  title='Mining Free Tokens Game in CryptoClickies!'
                >
                  <FacebookIcon
                    size={64}
                    round
                  />
                </FacebookShareButton>
              </a>
              <div className='column is-4'>
              </div>
            </div>
            
          </section>
          <footer class="modal-card-foot">
            <a href="mailto:benji@blockgeeks.com?Subject=CryptoClickies" class="button is-info">Give Feedback</a>
            <button onClick={() => {this.props.toggleShare()}} class="button">Close</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Share;