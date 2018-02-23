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
           className="movie-slide"
           key={item.id}
           style={divStyle}
           >
          <video>
                <source src={item.src} type="video/mp4" />
          </video>
         </div>
       );
     });
  }
  render() {
    return (
      <div className="movie-wrapper">
        {this.renderSlides()}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  movieSlides: state.movieSlides
})

export default connect(mapStateToProps)(MovieSlides);
