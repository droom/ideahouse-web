  $(document).ready(function() {


    $('.ui.checkbox').checkbox();
    $('.ui.accordion').accordion({exclusive : false});

    $('.ui.labeled.icon.button.bookmark').on('click', function() {
      $(this).toggleClass('active');
    });

    $('.ui.button.menu').on('click', function() {
      $('.ui.sidebar').sidebar('toggle');
    });

    $('.ui.dropdown').dropdown({
      on: 'click'
    });
    


  });
