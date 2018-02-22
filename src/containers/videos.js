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
          className="video-iframe col-sm-3"
          key={item.id}
        >
          <iframe
            className="cs-iframe"
            frameBorder="0"
            src={item.src}
            allowFullScreen
            ></iframe>
        </div>
      )
    });
  }
  render() {
    return (
      <div className="container video-container ">
        <div className="row video-row">
          {this.renderVids()}
        </div>
      </div>
    )
  }
}

const mapStateProps = (state) => ({
  videos:state.videos
})

export default connect(mapStateProps)(Videos);
