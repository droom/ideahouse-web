  $(document).ready(function() {

    var searchSwatch = $('table.ui.table.swatch.search')
    var searchSwatchSelected = false


    $('.ui.radio.checkbox').checkbox();
    $('.gate .ui.radio.checkbox').prop("checked", false);
    // Advanced search
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


    $('#account-private').on('click', function() {
      $('input[name=\'company\']').prop('disabled', true);
    });

    $('#account-business').on('click', function() {
      $('input[name=\'company\']').prop('disabled', false);
    });

    $('.ui.button.menu').on('click', function() {
      $('.ui.sidebar').sidebar('toggle');
    });

    $('.ui.dropdown').dropdown({
      on: 'click'
    });

    $('.ui.menu a.item').on('click', function() {
      $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
    });

    $('.ui.labeled.icon.button.bookmark').on('click', function() {
      $(this).toggleClass('active');
    });

    $('table').tablesort();

    // product page
    $('table.stock').hide();
    $('a.btn-details').on('click', function() {
      $('table.stock').hide();
      $('table.details').show();
    });

    $('a.btn-stock').on('click', function() {
      $('table.stock').show();
      $('table.details').hide();
    });


  });
