import $ from 'jquery';

function playVideo() {
  let video = false;
  $('.movie-slide video').on('click', function() {
      video= !video;
      if(video) {
        $('.movie-slide video').get(0).play();
      }else {
        $('.movie-slide video').get(0).pause();
      }
  });
  $('.movie-slide video').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
})
}

export default playVideo;
