  $(document).ready(function() {

    var bookmarkAdded = false;

    $('#bookmark-toggle').click(function(e){
      e.preventDefault();
      productTitle = $('#product-title').text();
      if (!bookmarkAdded){
        $.notify(productTitle+" added to your bookmarks." , "success");
      } else {
        $.notify(productTitle+" removed from your bookmarks.", "success");
      }
      $(this).find('i.heart.icon').toggleClass('empty');
      bookmarkAdded = !bookmarkAdded;
    });


  });
