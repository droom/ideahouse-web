  $(document).ready(function() {

    $(window).scroll(function () {
      if ($(window).scrollTop() > 99) {
        $('#nav_bar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 100) {
        $('#nav_bar').removeClass('navbar-fixed');
      }
    });


    $('.ui.menu a.item').on('click', function() {
      $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
    });

});
