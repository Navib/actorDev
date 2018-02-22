import React, { Component } from 'react';

import MovieSlides from './../containers/movie_slides';
import MenuOverlay from './../components/menu_overlay';
import mySwiper from './../js/hero_init';

class MovieSlider extends Component {
  componentDidMount(){
    mySwiper();
  }
  render() {
    return (
      <div className="movie-slider-wrapper">
        <div className="custom-bg"></div>
        <MenuOverlay />
        <div className="swiper-container movie-container">
          <MovieSlides />
        </div>
      </div>
    )
  }
}

export default MovieSlider;
