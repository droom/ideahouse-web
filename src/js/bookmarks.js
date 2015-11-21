  $(document).ready(function() {

    var bookmarkAdded = false;

    if ($('body.bookmarks').length > 0)
    {
      checkBookmarkTiles();
    }


    $('#bookmark-toggle').click(function(e){
      productTitle = $('#product-title').text();
      e.preventDefault();
      if (!bookmarkAdded){
        $.notify(productTitle+" added to your bookmarks." , "success");
      } else {
        $.notify(productTitle+" removed from your bookmarks.", "success");
      }
      $(this).find('i.heart.icon').toggleClass('empty');
      bookmarkAdded = !bookmarkAdded;
    });


    $('.ui.icon.button.remove').click(function(e){
      var tileRemoved = $(this).parent()
      var tileDesc =  $(tileRemoved).find('.description').text();

      $(this).find('i').addClass('empty');

      tileRemoved.addClass('fadeAway')

      setTimeout(function() {
        tileRemoved.remove();
        checkBookmarkTiles();

      }, 400);

      $.notify(tileDesc+" removed from your bookmarks.", "success");

    });


    function checkBookmarkTiles(){

      if ($('#bookmark-tiles').is(':empty')){
        console.log("empty");
        $('#bookmark-msg').show();

      } else {
        console.log("not empty");
        $('#bookmark-msg').hide();
      }
    }





  });
