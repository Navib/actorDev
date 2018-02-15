import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="intro-wrapper">
        <div className="split-bg-wrapper">
          <img className="top-bg" src="/assets/images/jcs_split.jpg"/>
          <div className="center-card"><p id="c1">JUSTIN C. SCHILLING</p> <p id="c2">ACTOR</p> </div>
          <div className="front-tl"><p>IMPROV</p></div>
          <div className="front-br"><p>EMCEE</p></div>
          <div id="fBox" className="upDown"><img src="/assets/images/mouse-outline.png" id="mouse" /></div>
        </div>
        <div className="front-overlay">
        </div>
      </div>
    )
  }
}

export default Intro;
