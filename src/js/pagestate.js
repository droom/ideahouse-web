  $(document).ready(function() {

    $('.authorised-hide').show();
    $('.authorised-show').hide();
    $('.ui.info.message.reset').hide();

    function pageState(){

     console.log("localStorage.auth is "+localStorage.auth);

     if (localStorage.auth === "true"){

      $('.authorised-hide').hide();
      $('.authorised-show').show();

      // Adds name to profile, menu, browse
      if (localStorage.name !== undefined && localStorage.name !== "undefined" && localStorage.name.length !== 0) {
        $('.browse .personalise').text("Welcome back, "+localStorage.name);
        $('.profile .personalise').text(localStorage.name+"\'s Profile");
        $('.profile .personalise').text(localStorage.name+"\'s Profile");
      }

      // Adds email to profile
      if (localStorage.name !== undefined && localStorage.name !== "undefined" && localStorage.name.length !== 0) {
       $('.email-static').text(localStorage.email);
     }

      // Persists entered values inputs
      $('#name').val(localStorage.name);
      $('#company').val(localStorage.company);
      $('#state').val(localStorage.state);
      $('#telephone').val(localStorage.telephone);

      // Persists dropdown selections
      $('#salutation').dropdown('set value', localStorage.salutation);
      $('#currency').dropdown('set value', localStorage.currency);
      $('#language').dropdown('set value', localStorage.language);

      // Bookmarks
      if (localStorage.bookmarked === "true") {
      }

    }

    else {
      $('.authorised-hide').show();
      $('.authorised-show').hide();
    }
  }


  $('#profile-details').click(function(e){
    localStorage.name = $('#name').val();
    localStorage.company = $('#company').val();
    localStorage.currency = $('#currency').val();
    localStorage.salutation = $('#salutation').val();
    localStorage.language = $('#language').val();
    localStorage.telephone = $('#telephone').val();
    localStorage.state = $('#state').val();
    pageState();
  });

  $('#gate-submit').click(function(e){
    localStorage.name = $('#name').val();
    localStorage.company = $('#company').val();
    localStorage.currency = $('#currency').val();
    localStorage.salutation = $('#salutation').val();
    localStorage.language = $('#language').val();
    localStorage.telephone = $('#telephone').val();
    localStorage.state = $('#state').val();
    pageState();
  });

  $('#gate-signin').click(function(e){
    localStorage.email = $('#email').val();
    localStorage.auth = "true";
  });

  $('#gate-signout').click(function(e){
    localStorage.auth = "false";
  });

  $('#gate-reset').click(function(e){
    $('.ui.info.message.reset').show();
  });

  pageState();

});
