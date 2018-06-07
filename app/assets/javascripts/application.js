// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require popper
//= require slick
//= require bootstrap.min
//= require jquery.easing
//= require scrollreveal
//= require jquery.magnific-popup
//= require_tree .
//= require jquery.responsiveTabs
//= require jquery-modal-video


$(document).ready(function() {
  $('.nav-desktop a[href^="#"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash,
     $target = $(target);

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
     }, 900, 'swing', function () {
         window.location.hash = target;
     });
 });
  $(".video-trigger").modalVideo({
			youtube:{
				controls:0,
				nocookie: true,
        title:false,
        autoplay:true,
        showinfo:0
			}
		});
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  $('.center').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 1,
    // adaptiveHeight: true,
    dots: true,
    fade: false,

    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.token-slider').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: false,
    mobileFirst:true,
    responsive: [{
        breakpoint: 768,
        settings: {
          mobileFirst:true,
          arrows: true,
          centerMode: false,
          centerPadding: '60px',
          slidesToShow: 3 ,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          mobileFirst:true,
          arrows: true,
          centerPadding: '60px',
          slidesToShow: 4,
        }
      }
    ]
  });
  // Optimalisation: Store the references outside the event handler:
  $('#horizontalTab').responsiveTabs({
    startCollapsed: 'false'
});
});

$(window).on('load', function() {
  var $window = $(window);
  var homepagevideo = $('#homepage-reel');
  var contentvideo = $('#content-reel');


  function checkWidth() {
      var windowsize = $window.width();
      if (windowsize < 768) {
          //It is a small screen


      } else {
          //It is a big screen or desktop
            $('.center').slick('slickRemove', $('.slick-slide').index('#slick-slide00'))

      }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
 });

$(window).scroll(function() {
  // 100 = The point you would like to fade the nav in.

  if ($(window).scrollTop() > 20) {

    $('.navbar').addClass('show');

  } else {

    $('.navbar').removeClass('show');

  };
});
