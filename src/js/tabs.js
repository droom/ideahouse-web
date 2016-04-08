  $(document).ready(function() {

    $('.menu .item').tab();

    // Dry this out
    $('.product .stock').hide();
    $('.product .price').hide();

    // $('.product .details').hide();
    // $('.product .stock').hide();
    // $('.product .price').show();

    $('a.btn-details').on('click', function() {
      $('.product .stock').hide();
      $('.product .details').show();
      $('.product .price').hide();
    });

    $('a.btn-stock').on('click', function() {
      $('.product .stock').show();
      $('.product .details').hide();
      $('.product .price').hide();
    });

    $('a.btn-price').on('click', function() {
      $('.product .stock').hide();
      $('.product .details').hide();
      $('.product .price').show();
    });


  });
