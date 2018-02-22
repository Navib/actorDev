import $ from "jquery";

function menu() {

  let active = false;

  $('.activate-menu').on('click', function(e) {
    e.preventDefault();
    active = !active;
    if(active){
      setTimeout(function() {
        $('#menu').css({'z-index':'10'});
      },200)
      $('.menu-container').css({visibility:'visible', height:'100vh'});
    }else {
      setTimeout(function() {
        $('#menu').css({'z-index':'-10'});
      },1000)
      $('.menu-container').css({visibility:'hidden', height:'0%'});
    }

  })
}

export default menu;
