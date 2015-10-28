  $(document).ready(function() {

    // Advanced Search

    var searchSwatch = $('table.ui.table.swatch.search')
    var searchSwatchSelected = false

    $('.ui.radio.checkbox').checkbox();
    $('.gate .ui.radio.checkbox').prop("checked", false);
     searchSwatch.hide();

    $("#colour-specify").on('click', function() {
      searchSwatch.show();
    });

    $("#colour-any").on('click', function() {
     searchSwatch.hide();
    });

    $('table.swatch.search td.swatch').on('click', function() {
      $('table.swatch.search td.swatch').removeClass('selected');
      $(this).toggleClass('selected');
    });

    // Register

    $('#account-private').on('click', function() {
      $('input[name=\'company\']').prop('disabled', true);
    });

    $('#account-business').on('click', function() {
      $('input[name=\'company\']').prop('disabled', false);
    });

    $('.ui.labeled.icon.button.bookmark').on('click', function() {
      $(this).toggleClass('active');
    });

    $('.ui.button.menu').on('click', function() {
      $('.ui.sidebar').sidebar('toggle');
    });

    $('.ui.dropdown').dropdown({
      on: 'click'
    });


    // Navigation

    $('.ui.menu a.item').on('click', function() {
      $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
    });

    // Table
    $('table').tablesort();

    // Dry this out
    $('table.stock').hide();
    $('table.price').hide();

    $('a.btn-details').on('click', function() {
      $('table.stock').hide();
      $('table.details').show();
      $('table.price').hide();
    });

    $('a.btn-stock').on('click', function() {
      $('table.stock').show();
      $('table.details').hide();
      $('table.price').hide();
    });

    $('a.btn-price').on('click', function() {
      $('table.stock').hide();
      $('table.details').hide();
      $('table.price').show();
    });

    $('.menu .item').tab();

    // Elipsis
    $(".content .description").dotdotdot({});

    // Touch swipe
    $('.product-carousel').slick({
      dots: true

    });


  });
