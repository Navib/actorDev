import Scrollbar from 'smooth-scrollbar';
import React from 'react';
import $ from "jquery";

function scrollBar() {
  const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'),{
    speed:'3.2',
    overscrollEffect:'bounce',
    damping:'.04',
  });
  scrollbar.addListener(function() {
    let prevEl = true;
    let currEl = scrollbar.isVisible(document.querySelector('.movie-slider-wrapper'));
    let nextEl = false;

    let arr = $('.scroll-content');
    console.log(arr);
    let node = parseInt($("#counter").html());
    node = node;
    node
    console.log(node);
    if(currEl && node < 4 && node > 1) {
      scrollbar.scrollIntoView(document.querySelector('.movie-slider-wrapper'));
    }

  });
}

export default scrollBar;
