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
    


    // $('.ui.modal').modal('show');
    // $('.ui.modal').modal('show');
    
    $('.ui.button.pop').click(function(e){
      e.preventDefault();
      $('.ui.modal').modal('show');
    });

    

  });
