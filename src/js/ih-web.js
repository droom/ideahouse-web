  $(document).ready(function() {


    $('table').tablesort();


    // Semantic UI

    $('.ui.button.menu').on('click', function() {
      $('.ui.sidebar').sidebar('toggle')
      ;
    });

    $('.ui.dropdown').dropdown({
      on: 'click'
    });

    $('.ui.menu a.item').on('click', function() {
      $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
      ;
    });

    $('.ui.labeled.icon.button.bookmark').on('click', function() {


      if ($(this).hasClass('active')){

        $(this).replaceWith( "<div class=\"ui labeled icon button bookmark\">Bookmark<i class=\"bookmark icon\"></i></div>" );

      } else {

        $(this).replaceWith( "<div class=\"ui labeled icon button bookmark active\">Bookmarked<i class=\"bookmark icon\"></i></div>" );

      }



    });




// $( "div.second" ).replaceWith( "<h2>New heading</h2>" );






  });
