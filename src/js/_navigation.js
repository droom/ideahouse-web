$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 99) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 100) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 300);
          return false;
        }
      }
    });
  });


});
