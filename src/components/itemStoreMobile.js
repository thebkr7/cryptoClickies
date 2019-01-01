import React, { Component } from 'react';
import './components.scss';


class ItemStoreMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }


  render() {

    return (
      <div className='margin-bottom is-centered'>
        <div className="sidebarMobile">
          <div className="scoreBoardMobile">
            <a onClick={() => {this.props.upgradeLevel()}} className="button-wood-mobile fontWhite">Upgrade Axe</a>
            <div className="fontWhite">Clicks</div>
            <br />
            <div className="score">{this.props.clickCount}</div>
            {/* <div className="loot">
              <ul className="lootracker">
                <li className="fontWhiteScores"><span>0</span> x <img src="http://adrianpayne.me/game/assets/images/gem.png"/></li>
                <li className="fontWhiteScores"><span>0</span> x <img src="http://adrianpayne.me/game/assets/images/star.png"/></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemStoreMobile;