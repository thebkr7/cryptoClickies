import React, { Component } from 'react';
import './components.scss';


class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPulse: true,
    }
  }

  render() {
    return (
      <div className='margin-bottom'>
        <progress className={`progress is-info ${this.props.mouseDown ? '' : ''}`} value={this.props.clickCount} max={this.props.tillNextLevel}>60%</progress>
      </div>
    );
  }
}

export default Progress;