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



// 1-99 units : Each incremental click is 1 unit
// 100-499 units: Each incremental click is 10 units
// 500-999 units: Each incremental click is 50 units
// 1,000-9,999 units: Each incremental click is 100 units
// 10,000-29,999 units: Each incremental click is 500 units
// 30,000-999,999 units: Each incremental click is 1000 units


    $("form.ui.form.advanced-search button.ui.button").click(function(e) {
      e.preventDefault();

      var thisParent = $(this).parent().parent();

      var valInput = $(thisParent).find('input');
      var valCurrent = parseInt($(valInput).val());
      var valTenPercent = (valCurrent / 100) * 10;


      var val6 = 30000
      var val5 = 10000
      var val4 = 1000
      var val3 = 500
      var val2 = 100 
      var val1 = 0


      if ($(this).hasClass("minus")){

        switch(true) {

          case (isNaN(valCurrent)):
          $(valInput).val(0);
          break;

          case (val1 === valCurrent):
          console.log("already lowest, keep at val1")
          break;

          case (valCurrent >= 1 && valCurrent < val2 ):
          $(valInput).val(parseInt(valCurrent - 1));
          break;

          case (valCurrent >= val2 && valCurrent < val3):
          $(valInput).val(parseInt(valCurrent - 10));
          break;
      
          case (valCurrent >= val3 && valCurrent < val4):
          $(valInput).val(parseInt(valCurrent - 50));
          break;

          case (valCurrent >= val4 && valCurrent < val5):
          $(valInput).val(parseInt(valCurrent - 100));
          break;

          case (valCurrent >= val5 && valCurrent < val6):
          $(valInput).val(parseInt(valCurrent - 500));
          break;

          case (valCurrent >= val6):
          $(valInput).val(parseInt(valCurrent - 1000));
          break;

          default:
          $(valInput).val(parseInt(valCurrent - 1));
          return;

        }
      }


      if ($(this).hasClass("plus")){

        switch(true) {

          case (isNaN(valCurrent)):
          $(valInput).val(1);
          break;

          case (valCurrent >= val1 && valCurrent < val2 ):
          $(valInput).val(parseInt(valCurrent + 1));
          break;

          case (valCurrent >= val2 && valCurrent < val3):
          $(valInput).val(parseInt(valCurrent + 10));
          break;
      
          case (valCurrent >= val3 && valCurrent < val4):
          $(valInput).val(parseInt(valCurrent + 50));
          break;

          case (valCurrent >= val4 && valCurrent < val5):
          $(valInput).val(parseInt(valCurrent + 100));
          break;

          case (valCurrent >= val5 && valCurrent < val6):
          $(valInput).val(parseInt(valCurrent + 500));
          break;

          case (valCurrent >= val6):
          $(valInput).val(parseInt(valCurrent + 1000));
          break;

          default:
          $(valInput).val(parseInt(valCurrent + 1));
          return;


        }
      }
    });


  });
