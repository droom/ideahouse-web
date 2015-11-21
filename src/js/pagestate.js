  $(document).ready(function() {

    $('.authorised-hide').show();
    $('.authorised-show').hide();

    // storage.removeItem(localStorage.auth);

    // var authorised = localStorage.auth;
    // console.log("authorised is "+authorised);

    function pageState(){

     console.log("localStorage.auth is "+localStorage.auth);

     if (localStorage.auth === "true"){

      console.log("show authorised items");

      $('.authorised-hide').hide();
      $('.authorised-show').show();

      $('.browse .personalise').text("Welcome back, "+localStorage.name);
      $('.profile .personalise').text(localStorage.name+"\'s Profile");
      $('.profile .personalise').text(localStorage.name+"\'s Profile");

      $('.email-static').text(localStorage.email);

      $('#name').val(localStorage.name);
      $('#company').val(localStorage.company);
      $('#state').val(localStorage.state);
      $('#telephone').val(localStorage.telephone);

      $('#salutation').dropdown('set value', localStorage.salutation);
      $('#currency').dropdown('set value', localStorage.currency);
      $('#language').dropdown('set value', localStorage.language);

    }

    else {
      console.log("hide authorised items");
      $('.authorised-hide').show();
      $('.authorised-show').hide();

    }
  }

  pageState();

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

  $('#signin').click(function(e){
    localStorage.email = $('#email').val();
    localStorage.auth = "true";
  });

  $('#signout').click(function(e){
    localStorage.auth = "false";
  });


});
