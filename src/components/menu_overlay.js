import React, { Component } from 'react';
import { connect } from 'react-redux';

class MenuOverlay extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="menu-overlay-wrapper">
        <div className="top-bar">
          <h1>JUSTIN C. SCHILLING</h1>
        </div>
        <div className="right-bar">
          <a href="" className="activate-menu">
            MENU
            <span className="top line"></span>
            <span className="right line"></span>
            <span className="bottom line"></span>
            <span className="left line"></span>
          </a>
        </div>
        <div className="left-bar">
          <p><span aria-hidden="true" className="icon-location"></span>New York City</p>
        </div>
        <div className="bottom-bar upDown">
          <img src="/assets/images/mouse-outline.png" className="mouse-icon" />
        </div>
      </div>
    )
  }
}

export default MenuOverlay;
