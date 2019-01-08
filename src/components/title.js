import React, { Component } from 'react';
import localStorage from 'localStorage';
import MediaQuery from 'react-responsive';


import ProgressCircle from './progressCircle.js';
import './components.scss';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWelcome: false,
    }
  }

  componentDidMount() {
    var returning = localStorage.getItem('returning');
    if (!returning) {
      this.setState({displayWelcome: true});
    }
  }

  render() {
    var clickCount = this.props.clickCount ? this.props.clickCount : '0';
    var largeClickCount = this.props.clickCount ? this.props.clickCount.toString() : '';
    if (this.props.clickCount < 10) {
      largeClickCount = '0000' + clickCount.toString()
    }
    else if (this.props.clickCount < 100) {
      largeClickCount = '000' + clickCount.toString()
    }
    else if (this.props.clickCount < 1000) {
      largeClickCount = '00' + clickCount.toString()
    }
    else if (this.props.clickCount < 10000) {
      largeClickCount = '0' + clickCount.toString()
    }

    var levelPercentage = ( this.props.level + 1 ) / 5 * 100;
    var nextLevelPercentage = Number(largeClickCount.slice(2,4));
    var shortPercentage = Number(largeClickCount.slice(3,5));

    return (
      <div>
        <div className='columns top-padding'>
          <div className='column is-6'>
            <MediaQuery minDeviceWidth={1224}>
              <div className='columns'>
              <div className='column'>
                <ProgressCircle percentage={levelPercentage} text='Levels' color='#FF5C5C'/>
              </div>
              <div className='column'>
                <ProgressCircle percentage={nextLevelPercentage} text='Remaining' color='#24B2FA'/>
              </div>
              <div className='column'>
                <ProgressCircle percentage={shortPercentage} text='Milestone' color='#2ECC71'/>
              </div>
            </div>
            </MediaQuery>
          </div>

          <div className='column is-1 fontWhiteTitle is-centered' >
            {this.props.clickCount}
          </div>
        </div>
        { (this.state.displayWelcome) &&
          <div class="notification is-info half-width is-centered" onClick={() => {this.setState({displayWelcome: false})}}>
            <button onClick={() => {this.setState({displayWelcome: false})}} class="delete"></button>
            Welcome to Cryptoclickies! The object of the game is to help Matthew dig. You can do so by clicking on him. As you dig, you’ll earn clicks that can be spent on upgrades to help you dig faster. As you upgrade, your ability to dig will continue to grow until you’re an unstoppable digging machine. And when you dig far enough, you may find some unique treasures…
          </div>
        }
      </div>
    );
  }
}

export default Title;