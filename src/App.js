import React, { Component } from 'react';
// import axios from 'axios';
import localStorage from 'localStorage';
import Confetti from 'react-dom-confetti';

import Progress from './components/progress.js';
import ItemStore from './components/itemStore.js';

import './App.css';
import 'bulma/css/bulma.css';
import level0Up from './assets/waitforclick.png';
import level0Down from './assets/clicked.png';
import level1Up from './assets/level1Up.png';
import level1Down from './assets/level1Down.png';
import item1 from './assets/item1.png';
// import gems from './assets/gems.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      clickCount: 0,
      clickRate: 1,
      tillNextLevel: 1000,
      mouseDown: false,
      clicksSaved: false,
      level: 0,
      levels: [
        {
          clickRate: 1,
          images: [level0Up, level0Down],
        },
        {
          clickRate: 2,
          images: [level1Up, level1Down, item1],
        }
      ],
      upImage: level0Up,
      downImage: level0Down,
    }
  }

  componentDidMount() {
    var clickCount = 0;
    var previousCount = localStorage.getItem('clickCount');
    var previousClickRate = localStorage.getItem('clickRate');
    if (previousCount > 1) {
      clickCount = previousCount;
      var level = localStorage.getItem('level');
      if (level > 0) {
        this.setState({
          upImage: level1Up,
          downImage: level1Down,
          clickRate: previousClickRate,
        });        
      }
      if (previousClickRate > 0) {
        this.setState({
          level: level,
          tillNextLevel: previousClickRate * 1000,
        });
      } else {
        this.setState({
          level: level,
        });
      }
    }
    this.setState({clickCount: clickCount});
  }

  incrementClick = () => {
    // console.log('clickRate', this.state.clickRate)
    localStorage.setItem('clickCount', this.state.clickCount);
    var clickCount = +this.state.clickCount + +this.state.clickRate
    this.setState({
      clickCount: clickCount,
      mouseDown: true,
      clicksSaved: false,
      active: !this.state.active,
    });
  }

  mouseUp = () => {
    this.setState({
      mouseDown: false,
      active: !this.state.active,
    });
  }

  upgradeLevel = () => {
    if (this.state.clickCount >= 1000 && this.state.level < 1) {
      var updatedLevel = +this.state.level + 1;
      localStorage.setItem('level', updatedLevel)
      localStorage.setItem('clickCount', this.state.clickCount - 1000)
      localStorage.setItem('clickRate', 2)
      this.setState({
        level: updatedLevel,
        clickCount: this.state.clickCount - 1000,
        clickRate: +this.clickRate + 1,
      });
      window.location.reload();
    }
  }

  render() {

    const config = {
      angle: 60,
      spread: 45,
      startVelocity: 10,
      elementCount: 20,
      decay: 0.95
    };

    return (
      <div>
        <section class='hero has-background-black is-bold is-fullheight'>

          <div class="hero-body">
            <div class="container is-vertical-center">

                <div className='columns'>
                  <div className='column is-3'>
                    <br/>
                    <br/>
                    <ItemStore clickCount={this.state.clickCount} upgradeLevel={this.upgradeLevel} />
                  </div>

                  <div className='column'>
                    <div className='is-vertical-center'>
                      <figure class="image height-auto" onMouseDown={()=>{this.incrementClick()}} onMouseUp={()=>{this.mouseUp()}}>
                        <Confetti className='overlay' active={ this.state.active } config={ config }/>
                        {!this.state.mouseDown &&
                          <img src={this.state.upImage} />
                        }
                        {this.state.mouseDown &&
                          <img src={this.state.downImage} />
                        }
                      </figure>
                    </div>
                    <h1 class="title has-text-grey is-vertical-center">
                      {this.state.clickCount}
                    </h1>
                  </div>
                </div>

            </div>
          </div>
          <Progress clickCount={this.state.clickCount} tillNextLevel={this.state.tillNextLevel} mouseDown={this.state.mouseDown} />
        </section>
        
      </div>
    );
  }
}

export default App;