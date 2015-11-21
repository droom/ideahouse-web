  $(document).ready(function() {

    function pageState(){

     console.log("localStorage.auth is "+localStorage.auth);

     if (localStorage.auth === "true" || localStorage.auth === "undefined"){
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

  $('#change-currency .item').click(function(e){
    $.notify("Did you know, you can change the default currency in your profile settings?", "success");
  });

  $('#profile-password').click(function(e){
    console.log("Your password has been updated", "success")
  });

  $('#profile-notices').click(function(e){
    console.log("Your notices have been updated", "success")
  });

  $('#profile-details').click(function(e){

    localStorage.name = $('#name').val();
    localStorage.company = $('#company').val();
    localStorage.currency = $('#currency').val();
    localStorage.salutation = $('#salutation').val();
    localStorage.language = $('#language').val();
    localStorage.telephone = $('#telephone').val();
    localStorage.state = $('#state').val();
    pageState();
    $.notify("Your details have been updated", "success");

  });


  $('#signin').click(function(e){
    localStorage.email = $('#email').val();
    localStorage.auth = "true";
  });

  $('#signout').click(function(e){
    localStorage.auth = "false";
  });



});
