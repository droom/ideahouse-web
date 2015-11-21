  $(document).ready(function() {

    // Elipsis
    $(".content .description").dotdotdot({});

    // Touch swipe
    $('.product-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      lazyLoad: 'progressive',
      arrows: true,
      fade: false,
      dots: true,
      focusOnSelect: true,
      nextArrow: '.slick-slide'
    });

    // tablesort
    $('table.sortable').tablesort();


  });
