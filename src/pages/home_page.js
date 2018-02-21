import React, { Component } from 'react';
import scrollBar from './../js/scroll.js';

import BodyGrid from './../containers/body_grid';
import MovieSlider from './../components/movie_slider';
import Footer from './../components/footer';
import Intro from './../components/intro';

class HomePage extends Component {
  componentDidMount() {
    scrollBar();
  }
  render() {
    return (
      <div className="home-page page-body" id="my-scrollbar">
        <Intro />
        <MovieSlider />
        <BodyGrid
          id="0"
        />
        <BodyGrid
          color="blue"
          id="1"
        />
        <BodyGrid
          color="purple"
          id="2"
        />
        <Footer />
      </div>
    )
  }
}

export default HomePage;
