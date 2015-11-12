$(document).ready(function() {

  $('.label.bookmark i.red.heart.label.icon').on('click', function() {
    console.log("hello")
  });

  $('.notify').hide()

  $('#toggle-bookmark').click(function(e){
    e.preventDefault();
    $(this).find('i.heart.icon').toggleClass('empty');

    $('.notify').fadeIn("fast", function() {
      $(this).delay(1000).fadeOut("slow");
    });
  });

  $('.remove-bookmark').click(function(e){
    e.preventDefault();
    $(this).find('i.heart.icon').toggleClass('empty');

    $('.ui.tiny.button.remove').fadeIn("fast", function() {
      $(this).delay(1000).fadeOut("slow");
    });
  });



});
