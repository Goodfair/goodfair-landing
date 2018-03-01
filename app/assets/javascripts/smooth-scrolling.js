$(document).ready(function(){
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    $('.toggle').toggleClass('active');
    $('#overlay').toggleClass('open');

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing');
  });
});
