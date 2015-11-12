$(document).ready(function() {

  $('#bookmark-toggle').click(function(e){
    e.preventDefault();
    $(this).find('i.heart.icon').toggleClass('empty');

  });

});



