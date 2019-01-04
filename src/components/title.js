import React, { Component } from 'react';
import './components.scss';
import localStorage from 'localStorage';

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
    return (
      <div >
        <div className='is-1 fontWhiteTitle is-centered top-padding' >
          {this.props.clickCount}
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