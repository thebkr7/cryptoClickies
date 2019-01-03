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
        {/* <progress className={`progress is-info ${this.props.mouseDown ? '' : ''}`} value={this.props.clickCount} max={this.props.tillNextLevel}>60%</progress> */}
        <ul class="skill-list">
          <li class="skill">
            <h3 className='fontWhite'>{this.props.clickCount} / {this.props.tillNextLevel} Next Level</h3>
            <progress class="skill-1" max={this.props.tillNextLevel} value={this.props.clickCount}>
              {/* <strong>Skill Level: 50%</strong> */}
            </progress>
          </li>
        </ul>
      </div>
    );
  }
}

export default Progress;