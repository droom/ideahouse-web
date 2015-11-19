  $(document).ready(function() {


    var searchSwatch = $('table.ui.table.swatch.search')
    var searchSwatchSelected = false

    $('.ui.checkbox')
    .checkbox()
    ;

    $('.ui.accordion').accordion(
    {
      exclusive : false
    }
    );


    $('.ui.form')
    .form({

      fields: {
        name: {
          identifier: 'name',
          rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your name'
          }
          ]
        },

        membership: {
          identifier: 'membership',
          rules: [
          {
            type   : 'checked',
            prompt : 'Please select your membership type'
          }
          ]
        },

        currency: {
          identifier: 'currency',
          rules: [
          {
            type   : 'checked',
            prompt : 'Please select your currency type'
          }
          ]
        },


        account: {
          identifier: 'account',
          rules: [
          {
            type   : 'checked',
            prompt : 'Please select your account type'
          }
          ]
        },


        language: {
          identifier: 'language',
          rules: [
          {
            type   : 'checked',
            prompt : 'Please select your default language'
          }
          ]
        },



        email: {
          identifier: 'email',
          rules: [
          {
            type   : 'email',
            prompt : 'Please enter your email'
          }
          ]
        },


        country: {
          identifier: 'country',
          rules: [
          {
            type   : 'empty',
            prompt : 'Please select a country'
          }
          ]
        },


        company: {
          identifier: 'company',
          rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your company name'
          }
          ]
        },

        telephone: {
          identifier: 'telephone',
          rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your telephone number'
          }
          ]
        },


        password: {
          identifier: 'password',
          rules: [
          {
            type   : 'minLength[6]',
            prompt : 'Your password must be at least 6 characters'
          },
          {
            type   : 'maxLength[12]',
            prompt : 'Your password must a maximum of 12 characters'
          }

          ]
        },


        passwordNew: {
          identifier: 'passwordNew',
          rules: [
          {
            type   : 'minLength[6]',
            prompt : 'Your new password must be at least 6 characters'
          },
          {
            type   : 'maxLength[12]',
            prompt : 'Your new password must a maximum of 12 characters'
          }
          ]
        },


        passwordNewRetype: {
          identifier: 'passwordNewRetype',
          rules: [
          {
            type   : 'empty',
            prompt : 'Please retype your new password'
          },
          {
            type   : 'match[passwordNew]',
            prompt : 'Your new passwords don\'t match. Please check again.'
          }
          ]
        },



        terms: {
          identifier: 'terms',
          rules: [
          {
            type   : 'checked',
            prompt : 'You must agree to the conditions of use before continuing'
          }
          ]
        }
      }
    })
  ;

  $('.gate .ui.radio.checkbox').prop("checked", false);
  searchSwatch.hide();

  $("#colour-specify").on('click', function() {
    searchSwatch.show();
  });

  $("#colour-any").on('click', function() {
   searchSwatch.hide();
 });

  $('table.swatch.search td.swatch').on('click', function() {
    $('table.swatch.search td.swatch').removeClass('selected');
    $(this).toggleClass('selected');
  });




    // Register

    $('#account-private').on('click', function() {
      $('input[name=\'company\']').prop('disabled', true);
    });

    $('#account-business').on('click', function() {
      $('input[name=\'company\']').prop('disabled', false);
    });

    $('.ui.labeled.icon.button.bookmark').on('click', function() {
      $(this).toggleClass('active');
    });

    $('.ui.button.menu').on('click', function() {
      $('.ui.sidebar').sidebar('toggle');
    });

    $('.ui.dropdown').dropdown({
      on: 'click'
    });



    // Navigation

    $('.ui.menu a.item').on('click', function() {
      $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
    });



    // Dry this out
    $('table.stock').hide();
    $('table.price').hide();

    $('a.btn-details').on('click', function() {
      $('table.stock').hide();
      $('table.details').show();
      $('table.price').hide();
    });

    $('a.btn-stock').on('click', function() {
      $('table.stock').show();
      $('table.details').hide();
      $('table.price').hide();
    });

    $('a.btn-price').on('click', function() {
      $('table.stock').hide();
      $('table.details').hide();
      $('table.price').show();
    });



    $('.menu .item').tab();

    // Elipsis
    $(".content .description").dotdotdot({});

    // Touch swipe
    $('.product-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      lazyLoad: 'progressive',
      arrows: true,
      fade: false,
      dots: true,
      focusOnSelect: true,
      nextArrow: '.slick-slide'
    });



    $('table.sortable').tablesort();

    $(window).scroll(function () {

      if ($(window).scrollTop() > 99) {
        $('#nav_bar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 100) {
        $('#nav_bar').removeClass('navbar-fixed');
      }
    });

  // smooth scrolling
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 300);
          return false;
        }
      }
    });
  });




  var bookmarkAdded = false;

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

    tileRemoved.addClass('rotateOutDownRight')
    setTimeout(function() {

      tileRemoved.remove();
      checkBookmarkTiles();

    }, 800);

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


  if ($('body.bookmarks').length > 0)
  {
    checkBookmarkTiles();
  }



  $('#change-currency .item').click(function(e){
    $.notify("Did you know, you can change the default currency in your profile settings?", "success");
  });

  $('#profile-details').click(function(e){
    $.notify("Your details have been updated", "success");
  });

  $('#profile-password').click(function(e){
    console.log("Your password has been updated", "success")
  });

  $('#profile-notices').click(function(e){
    console.log("Your notices have been updated", "success")
  });





});
