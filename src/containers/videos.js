import React, { Component } from 'react';
import { connect } from 'react-redux';

class Videos extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  renderVids() {
    return this.props.videos.map((item) => {
      console.log(item);
      return (
        <div
          className="video-slide"
          key={item.id}
        >
        {item.video}
      </div>
      )
    });
  }
  render() {
    return (
      <div className="swiper-wrapper">{this.renderVids()}</div>
    )
  }
}

const mapStateProps = (state) => ({
  videos:state.videos
})

export default connect(mapStateProps)(Videos);
