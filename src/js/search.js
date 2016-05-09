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
    $( "form.ui.form.advanced-search" ).click(function( event ) {
      event.preventDefault();
    });


    // 1-100 units : Each incremental click is 1 unit
    // 101-500 units: Each incremental click is 10 units
    // 501-1,000 units: Each incremental click is 50 units
    // 1,001-10,000 units: Each incremental click is 100 units
    // 10,001-30,000 units: Each incremental click is 500 units
    // 30,001-999,999 units: Each incremental click is 1000 units.


    $("form.ui.form.advanced-search button.ui.button").click(function(e) {
      e.preventDefault();

      var thisParent = $(this).parent().parent();

      var valInput = $(thisParent).find('input');
      var valCurrent = parseInt($(valInput).val());
      var valTenPercent = (valCurrent / 100) * 10;


      if ($(this).hasClass("minus")){

        switch(true) {

          case (isNaN(valCurrent)):
          console.log("NaN, make 0")
          $(valInput).val(0);
          break;

          case (0 === valCurrent):
          console.log("already lowest, keep at 0")
          break;

          case (valCurrent > 0 && valCurrent <= 100 ):
          console.log("1-100 units : Each incremental click is 1 unit")
          $(valInput).val(parseInt(valCurrent - 1));
          break;

          case (valCurrent > 100 && valCurrent <= 500):
          console.log("101-500 units: Each incremental click is 10 units")
          $(valInput).val(parseInt(valCurrent - 10));
          break;
      
          case (valCurrent > 500 && valCurrent <= 1000):
          console.log("501-1,000 units: Each incremental click is 50 units")
          $(valInput).val(parseInt(valCurrent - 50));
          break;

          case (valCurrent > 1000 && valCurrent <= 10000):
          console.log("1,001-10,000 units: Each incremental click is 100 units")
          $(valInput).val(parseInt(valCurrent - 100));
          break;

          case (valCurrent > 10000 && valCurrent <= 30000):
          console.log("10,001-30,000 units: Each incremental click is 500 units")
          $(valInput).val(parseInt(valCurrent - 500));
          break;

          case (valCurrent > 30000):
          console.log("10,001-30,000 units: Each incremental click is 500 units")
          $(valInput).val(parseInt(valCurrent - 1000));
          break;

          default:
          console.log("DEFAULT: 1-100 units : Each incremental click is 1 unit")
          $(valInput).val(parseInt(valCurrent - 1));
          return;

        }
      }


      if ($(this).hasClass("plus")){

        switch(true) {

          case (isNaN(valCurrent)):
          console.log("not a number, add 1")
          $(valInput).val(1);
          break;

          case (valCurrent > 0 && valCurrent <= 100 ):
          console.log("1-100 units : Each incremental click is 1 unit")
          $(valInput).val(parseInt(valCurrent + 1));
          break;

          case (valCurrent > 100 && valCurrent <= 500):
          console.log("101-500 units: Each incremental click is 10 units")
          $(valInput).val(parseInt(valCurrent + 10));
          break;
      
          case (valCurrent > 500 && valCurrent <= 1000):
          console.log("501-1,000 units: Each incremental click is 50 units")
          $(valInput).val(parseInt(valCurrent + 50));
          break;

          case (valCurrent > 1000 && valCurrent <= 10000):
          console.log("1,001-10,000 units: Each incremental click is 100 units")
          $(valInput).val(parseInt(valCurrent + 100));
          break;

          case (valCurrent > 10000 && valCurrent <= 30000):
          console.log("10,001-30,000 units: Each incremental click is 500 units")
          $(valInput).val(parseInt(valCurrent + 500));
          break;

          case (valCurrent > 30000):
          console.log("10,001-30,000 units: Each incremental click is 500 units")
          $(valInput).val(parseInt(valCurrent + 1000));
          break;

          default:
          $(valInput).val(parseInt(valCurrent + 1));
          console.log("DEFAULT: 1-100 units : Each incremental click is 1 unit")
          return;


        }
      }
    });


  });
