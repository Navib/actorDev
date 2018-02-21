import React , { Component } from 'react';

import menu from './../js/menu';

class Menu extends Component {
  componentDidMount() {
    menu();
  }
  render() {
    return (
      <div id="menu" >
        <div className="menu-container">
          <a href="" className="activate-menu">
            CONTACT
            <span className="top line"></span>
            <span className="right line"></span>
            <span className="bottom line"></span>
            <span className="left line"></span>
          </a>
        </div>
      </div>
    )
  }
}

export default Menu;
