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


  var notifyAdd   = true;
  var notifyMinus = true; 

  $("form.ui.form.advanced-search button.ui.button").click(function(e) {
    e.preventDefault();


    var thisParent = $(this).parent().parent()
    var valInput = $(thisParent).find('input')
    var valCurrent = parseInt($(valInput).val());
    var valPercentage = (valCurrent / 100) * 10;


    if ($(this).hasClass("minus")){

      notifyAdd = true;

      switch(true) {
        case (isNaN(valCurrent)):
        console.log("NaN, make 0")
        $(valInput).val(0);
        break;
        case (0 === valCurrent):
        console.log("already lowest, keep at 0")
        break;
        case (10 >= valCurrent):
        console.log("10 or less, minus 1")
        $(valInput).val(parseInt(valCurrent - 1));
        break;
        default:
        console.log("minus 10%")
        $(valInput).val(Math.round(valCurrent - valPercentage));

        if (notifyMinus === true){
          $.notify("Decreasing by 10%", "info");
          notifyMinus = false;
        }
        return;
      }
    }

    if ($(this).hasClass("plus")){
      notifyMinus = true;

      switch(true) {
        case (isNaN(valCurrent)):
        console.log("not a number, add 1")
        $(valInput).val(1);
        break;
        case (9 >= valCurrent):
        console.log("less than 10")
        $(valInput).val(parseInt(valCurrent + 1));
        break;
        default:
        console.log("add 10%")
        $(valInput).val(Math.round(valCurrent + valPercentage));

        if (notifyAdd === true){
          $.notify("Increasing by 10%", "info");
          notifyAdd = false;
        }

        return;
      }
    }
  });












  });
