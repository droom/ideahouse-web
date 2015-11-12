$(document).ready(function() {

  $('table.sortable').tablesort();
  $(".content .description").dotdotdot({});

  $('.ui.button.menu').on('click', function() {
    $('.ui.sidebar').sidebar('toggle');
  });

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

});
