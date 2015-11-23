$(document).ready(function() {

  if ($('body.bookmarks').length > 0){
    checkBookmarkTiles();
  }
  function checkBookmarkTiles(){
    if ($('#bookmark-tiles').is(':empty')){
      console.log("empty");
      $('#bookmark-msg').show();
    } else {
      console.log("not empty");
      $('#bookmark-msg').hide();
    }
  }


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

});
