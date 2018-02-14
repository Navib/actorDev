import React, { Component } from 'react';

import MovieSlides from './../containers/movie_slides';
import mySwiper from './../js/hero_init';

class MovieSlider extends Component {
  componentDidMount(){
    mySwiper();
  }
  render() {
    return (
      <div className="movie-slider-wrapper">
        <div className="swiper-container">
          <MovieSlides />
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default MovieSlider;
