import React, { Component } from 'react';
// import axios from 'axios';
import localStorage from 'localStorage';
import Confetti from 'react-dom-confetti';
import MediaQuery from 'react-responsive';

import Progress from './components/progress.js';
import ItemStore from './components/itemStore.js';
import ItemStoreMobile from './components/itemStoreMobile.js';
import Title from './components/title.js';
import About from './components/about.js';

import './App.css';
import 'bulma/css/bulma.css';
import level0Up from './assets/level0_wait.png';
import level0Down from './assets/level0_clicked.png';
import level1Up from './assets/level2_wait.png';
import level1Down from './assets/level2_clicked.png';
import level3Up from './assets/level3_wait.png';
import level3Down from './assets/level3_clicked.png';
import level4Up from './assets/level4_wait.png';
import level4Down from './assets/level4_clicked.png';
import level5Up from './assets/level5_wait.png';
import level5Down from './assets/level5_clicked.png';
// import level2Down from './assets/level1Down.png';
// import gems from './assets/gems.png';


class AppWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      clickCount: 0,
      clickRate: 1,
      tillNextLevel: 1000,
      furtherUpgrades: true,
      mouseDown: false,
      clicksSaved: false,
      level: 0,
      levels: [
        [level0Up, level0Down], //SHOULD NOT BE ITEM ONE. IS A PLACEHOLDER
        [level1Up, level1Down],
        [level3Up, level3Down],
        [level4Up, level4Down],
        [level5Up, level5Down],
      ],
      upImage: level0Up,
      downImage: level0Down,
      aboutOpen: false,
    }
  }


  /*
  LOCAL STORAGE DATA STRUCTURE:
    level:
    clickCount:
    clickRate:
    tillNextLevel:
  */


  componentDidMount() {
    var returnUser = localStorage.getItem('returning');
    var clickCount = 0;
    var previousCount = localStorage.getItem('clickCount');
    var previousClickRate = localStorage.getItem('clickRate');
    if (returnUser) {
      clickCount = previousCount;
      var level = localStorage.getItem('level');
      if (previousClickRate > 0) {
        this.setState({
          level: level,
          clickRate: previousClickRate,
          tillNextLevel: previousClickRate * 1000,
        });
      } else { //This should never get hit but shall stay incase we allow leveling up without clickrate increases
        this.setState({
          level: level,
        });
      }
    } else {
      localStorage.setItem('level', 0);
      localStorage.setItem('clickRate', 1);
      localStorage.setItem('returning', true);
    };
    this.setState({clickCount: clickCount});
  }

  incrementClick = () => {
    localStorage.setItem('clickCount', this.state.clickCount);
    var clickCount = +this.state.clickCount + +this.state.clickRate
    this.setState({
      clickCount: clickCount,
      mouseDown: true,
      clicksSaved: false,
      active: !this.state.active,
    });
  }

  incrementClickMobile = () => {
    localStorage.setItem('clickCount', this.state.clickCount);
    var clickCount = +this.state.clickCount + +this.state.clickRate
    this.setState({
      clickCount: clickCount,
      mouseDown: true,
      clicksSaved: false,
      active: !this.state.active,
    });
    setTimeout(() => {this.mouseUp()}, 50);
  }

  mouseUp = () => {
    this.setState({
      mouseDown: false,
      active: !this.state.active,
    });
  }

  upgradeLevel = () => {
    if (this.state.clickCount >= this.state.tillNextLevel && this.state.level < 4) { // < 3 limits the levels to only 4 levels temporarily
      var updatedLevel = +this.state.level + 1; //hacky extra plus turns the string into an integer
      var tillNextLevel = updatedLevel * 2000;
      var furtherUpgrades = true;
      localStorage.setItem('level', updatedLevel);
      localStorage.setItem('clickCount', this.state.clickCount - 1000);
      localStorage.setItem('clickRate', 2);
      localStorage.setItem('tillNextLevel', tillNextLevel);
      if (updatedLevel >= 3) {
        furtherUpgrades = false;
      }
      this.setState({
        level: updatedLevel,
        clickCount: this.state.clickCount - 1000,
        clickRate: +this.clickRate + 1,
        tillNextLevel: tillNextLevel,
        furtherUpgrades: furtherUpgrades,
      });
      window.location.reload();
    }
  }

  toggleAbout = () => {
    this.setState({
      aboutOpen: !this.state.aboutOpen,
    });
  }

  render() {

    //for confetti animation
    const config = {
      angle: 60,
      spread: 45,
      startVelocity: 10,
      elementCount: this.state.clickRate * 2,
      decay: 0.95
    };

    return (
      <div>
        <a onClick={() => {this.toggleAbout()}} className='topright title is-6 has-text-white' >About</a>
        
        <section class='hero tile is-bold is-fullheight prevent-double-tap'>

          <Title clickCount={this.state.clickCount} tillNextLevel={this.state.tillNextLevel} level={this.state.level}/>

          <div class="hero-body">
            <div class="container is-vertical-center">
              
              <div className='columns'>

                <MediaQuery minDeviceWidth={1224}>
                  <div className='column is-3'>
                    <br/>
                    <br/>
                    <ItemStore clickCount={this.state.clickCount} level={this.state.level} furtherUpgrades={this.state.furtherUpgrades} upgradeLevel={this.upgradeLevel} />
                  </div>
                </MediaQuery>

                <div className='column'>
                  <div className='is-vertical-center'>

                    <MediaQuery minDeviceWidth={1224}>
                      <figure class="image height-auto" onMouseDown={()=>{this.incrementClick()}} onMouseUp={()=>{this.mouseUp()}}>

                        <Confetti className='overlay' active={ this.state.active } config={ config }/>
                        
                        {!this.state.mouseDown &&
                          <img src={this.state.levels[this.state.level][0]} />
                        }

                        {this.state.mouseDown &&
                          <img src={this.state.levels[this.state.level][1]} />
                        }

                      </figure>
                    </MediaQuery>

                    {/* For mobile had to set timeout to show the diggin animation */}
                    <MediaQuery maxDeviceWidth={1224}>
                      <figure class="image height-auto" onClick={()=>{this.incrementClickMobile()}} >

                        <Confetti className='overlay' active={ this.state.active } config={ config }/>
                        
                        {!this.state.mouseDown &&
                          <img src={this.state.levels[this.state.level][0]} />
                        }

                        {this.state.mouseDown &&
                          <img src={this.state.levels[this.state.level][1]} />
                        }

                      </figure>
                    </MediaQuery>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <Progress clickCount={this.state.clickCount} tillNextLevel={this.state.tillNextLevel} mouseDown={this.state.mouseDown} />

          <MediaQuery maxDeviceWidth={1224}>
            <ItemStoreMobile clickCount={this.state.clickCount} upgradeLevel={this.upgradeLevel} />                      
          </MediaQuery>
        
        </section>

        {this.state.aboutOpen &&
          <About toggleAbout={this.toggleAbout}/>
        }
        
      </div>
    );
  }
}

export default AppWindow;