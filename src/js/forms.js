  $(document).ready(function() {

    $('.ui.checkbox').checkbox();
    $('.ui.accordion').accordion({exclusive : false});

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

        account: {
          identifier: 'account',
          rules: [
          {
            type   : 'checked',
            prompt : 'Please select your account type'
          }
          ]
        },




        currency: {
          identifier: 'currency',
          rules: [
          {
            type   : 'empty',
            prompt : 'Please select your currency type'
          }
          ]
        },

        language: {
          identifier: 'language',
          rules: [
          {
            type   : 'empty',
            prompt : 'Please select your default language'
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



        email: {
          identifier: 'email',
          rules: [
          {
            type   : 'email',
            prompt : 'Please enter your email'
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


});
