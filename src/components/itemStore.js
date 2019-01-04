import React, { Component } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
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
        {/* <Manager>
          <Reference>
            {({ ref }) => (
              <button type="button" ref={ref}>
                Reference element
              </button>
            )}
          </Reference>
          <Popper placement="top">
            {({ ref, style, placement, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                Popper element
                <div ref={arrowProps.ref} style={arrowProps.style} />
              </div>
            )}
          </Popper>
        </Manager> */}
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