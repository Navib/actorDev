import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieSlides extends Component {
  constructor(props){
    super(props);
  }
  renderSlides() {
     return this.props.movieSlides.map((item) => {
       const divStyle = {
       }
       const imgLeft = {
         backgroundImage:`url(${item.img_left})`
       }
       const imgRight = {
         backgroundImage:`url(${item.img_right})`
       }
       return (
         <div
           className="swiper-slide movie-slide"
           key={item.id}
           style={divStyle}
           >
            <div style={imgLeft} className="left-img"></div>
            <div style={imgRight} className="right-img"></div>
         </div>
       );
     });
  }
  render() {
    return (
      <div className="swiper-wrapper movie-wrapper">
        {this.renderSlides()}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  movieSlides: state.movieSlides
})

export default connect(mapStateToProps)(MovieSlides);
