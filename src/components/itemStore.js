import React, { Component } from 'react';
// import Explosion from "react-explode/Explosion1";
import Confetti from 'react-dom-confetti';
import './components.scss';


class ItemStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }



  render() {

    const config = {
      angle: 90,
      spread: 45,
      startVelocity: 10,
      elementCount: 50,
      decay: 0.95
    };

    return (
      <div>


        {/* <Explosion size="40" delay={0} repeatDelay={0.1} repeat={1} /> */}
        <Confetti active={ this.state.active } config={ config }/>


          <div className="sidebar">
          <div className="stone gametile"></div>
          <div className="stone gametile"></div>
          <div className="stone gametile"></div>
          <div className="stone gametile"></div>
          <div className="stone gametile"></div>
          <div className="stone gametile"></div>
          <div className="stone gametile"></div>
          <div className="stone gametile"></div>    
          <div className="stone gametile"></div>
          <div className="stone gametile"></div>
          <div className="scoreBoard">
            <div className="fontWhite">Clicks</div>
            <br />
            <div className="score">{this.props.clickCount}</div>
            <div className="loot">
              <ul className="lootracker">
                <li className="fontWhiteScores"><span>0</span> x <img src="http://adrianpayne.me/game/assets/images/gem.png"/></li>
                <li className="fontWhiteScores"><span>0</span> x <img src="http://adrianpayne.me/game/assets/images/star.png"/></li>
              </ul>
            </div>
          </div>
          <a onClick={() => {this.setState({active: !this.state.active})}} className="button-wood fontWhite">Upgrade Axe</a>
        </div>
      </div>
    );
  }
}

export default ItemStore;