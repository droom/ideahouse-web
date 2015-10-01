  $(document).ready(function() {

    $('.ui.radio.checkbox').checkbox();
    $(".ui.radio.checkbox").prop("checked", false);

    $('.ui.circular.icon.button').popup();
    $('.ui.circular.icon.button').on('click', function() {
      $(this).toggleClass('active')
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
