import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './components.scss';


class ProgressCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPulse: true,
    }
  }

  render() {
    return (
      <div className='margin-bottom'>
        <CircularProgressbar
          percentage={this.props.percentage}
          // text={`${this.props.text} ${this.props.percentage}%`}
          styles={{
              path: { stroke: `${this.props.color}` },
              text: { fill: 'white', fontSize: '16px', right: '100px' },
              trail: { stroke: 'rgba(255, 255, 255, 0.4)'},
          }}
        />
        <div className='fontWhiteCircle is-centered'>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default ProgressCircle;