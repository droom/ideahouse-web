  $(document).ready(function() {

    $('#change-currency .item').click(function(e){
      $.notify("Did you know, you can change the default currency in your profile settings?", "success");
    });

    $('#profile-password').click(function(e){
      $.notify("Your password has been updated", "success")
    });

    $('#profile-notices').click(function(e){
      $.notify("Your notices have been updated", "success")
    });

    $('#profile-details').click(function(e){
      $.notify("Your details have been updated", "success");
    });


  });
