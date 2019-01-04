import React, { Component } from 'react';
import './components.scss';
import Axe0 from '../assets/axe_level0.png';
import Axe1 from '../assets/axe_level1.png';
import Axe2 from '../assets/axe_level2.png';
import Axe3 from '../assets/axe_level3.png';



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
            <div className="fontWhite">Axes</div>
            <br />
            {/* <div className="score">{this.props.clickCount}</div> */}
            {/* <div className="loot">
              <ul className="lootracker">
                <li className="fontWhiteScores"><span>0</span> x <img src="http://adrianpayne.me/game/assets/images/gem.png"/></li>
                <li className="fontWhiteScores"><span>{+this.props.level +1}</span> x <img src="http://adrianpayne.me/game/assets/images/star.png"/></li>
              </ul>
            </div> */}
             
             
             {/*  ***LEFT OF CENTERING AXE VERTICALLY */} 
            <figure className="image is-128x128"> 
              <img className='axe' src={Axe0} />
            </figure>
          </div>
          <a onClick={() => {this.props.upgradeLevel()}} className="button-wood fontWhite">Upgrade Axe</a>
        </div>
      </div>
    );
  }
}

export default ItemStore;