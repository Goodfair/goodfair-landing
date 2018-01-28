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
//= require bootstrap.min
//= require jquery.easing
//= require scrollreveal
//= require jquery.magnific-popup
//= require_tree .

$(document).ready(function() {
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
  });
});

$(window).scroll(function() {
  // 100 = The point you would like to fade the nav in.

  if ($(window).scrollTop() > 100) {

    $('.navbar').addClass('show');

  } else {

    $('.navbar').removeClass('show');

  };
});

$('.scroll').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 1500);
});
