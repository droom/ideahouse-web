  $(document).ready(function() {

    var searchSwatch = $('table.ui.table.swatch.search')
    var searchSwatchSelected = false

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

  });
