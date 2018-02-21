import $ from "jquery";

function menu() {

  let active = false;

  $('.activate-menu').on('click', function(e) {
    e.preventDefault();
    active = !active;
    if(active){
      $('#menu').css({'z-index':'10'});
      $('.menu-container').css({visibility:'visible', width:'100%'});
    }else {
      setTimeout(function() {
        $('#menu').css({'z-index':'-10'});
      },1000)
      $('.menu-container').css({visibility:'hidden', width:'0%'});
    }

  })
}

export default menu;
