import React, { Component } from 'react';
import './components.scss';


class ItemStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }


  render() {

    return (
      <div>
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
          <a onClick={() => {this.props.upgradeLevel()}} className="button-wood fontWhite">Upgrade Axe</a>
        </div>
      </div>
    );
  }
}

export default ItemStore;