import React, { Component } from 'react';
import './components.scss';


class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPulse: true,
    }
  }

  render() {
    return (
      <div >
        <div className='is-1 fontWhiteTitle is-centered top-padding' >
          {this.props.clickCount}
        </div>
      </div>
    );
  }
}

export default Title;