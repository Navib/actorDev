import React, { Component } from 'react';

import MovieSlides from './../containers/movie_slides';
import MenuOverlay from './../components/menu_overlay';
import playVideo from './../js/play_video';

class MovieSlider extends Component {
  componentDidMount(){
    playVideo();
  }
  render() {
    return (
      <div className="movie-slider-wrapper">
        <div className="custom-bg"></div>
        <MenuOverlay />
        <div className="movie-container">
          <MovieSlides />
        </div>
      </div>
    )
  }
}

export default MovieSlider;
