  $(document).ready(function() {

    // Elipsis
    $(".content .description").dotdotdot({});

    // Slick Slider
    $('.carousel-product').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      lazyLoad: 'progressive',
      arrows: false,
      fade: false,
      dots: true,
      focusOnSelect: true,
      nextArrow: '.slick-slide'
    });

    // Slick Slider
    $('.carousel-about').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      // lazyLoad: 'progressive',
      arrows: true,
      fade: false,
      dots: true,
      focusOnSelect: true,
      nextArrow: '.slick-slide',
      autoplay: true,
      autoplaySpeed: 4000
    });


  });
