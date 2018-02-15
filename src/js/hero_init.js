import Swiper from 'swiper';
import $ from "jquery";

function mySwiper() {
var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  speed:1400,
  mousewheel: {
    invert: false,
    releaseOnEdges: true,
    sensitivity: 1
  },
  pagination: {
    el: '.swiper-pagination',
  },
 });
 mySwiper.on('init', function() {
   $('#counter').html(nextIndex);
 })
 mySwiper.on('transitionStart', function () {
   const slideIndex = mySwiper.realIndex;
   const prevIndex =  slideIndex - 1;
   const nextIndex = slideIndex + 1;

    $('#counter').html(nextIndex);
     //Current
    $('.swiper-slide:eq('+slideIndex+')').children().css({height:'100%'});
    $('.swiper-slide:eq('+prevIndex+')').children().css({height:'0%', top:'0', bottom:'initial'});
    $('.swiper-slide:eq('+nextIndex+')').children().css({height:'0%', top:'initial', bottom:'0'});
});
}

export default mySwiper;
