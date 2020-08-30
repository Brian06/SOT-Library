const activeClassesHandler = () => {
  const optionsSelectors = [
    '.js-BeenVerified-list a',
    '.js-PeopleLooker-list a',
    '.js-JavaScript-list a',
  ];
  const selectors = optionsSelectors.join(', ');

  $(selectors).on('click', (e) => {
    const currentElement = e.currentTarget;
    const currentHash = currentElement.hash;
    const currentParent = $(currentElement).parent().parent().parent().find("a").eq(0);
    const selectorsToChange = [
      '.js-BeenVerified-nav',
      '.js-BeenVerified-list a',
      '.js-PeopleLooker-nav',
      '.js-PeopleLooker-list a',
      '.js-JavaScript-nav',
      '.js-JavaScript-list a',
    ];
    const selectors = selectorsToChange.join(', ');
    $(currentElement).tab('show');
    $(selectors).removeClass('active');
    $(`a[href="${currentHash}"]`).addClass('active');

    if (currentParent.hasClass('js-BeenVerified-nav')) {
      $('.js-BeenVerified-nav').addClass('active');
    } else if (currentParent.hasClass('js-PeopleLooker-nav')) {
      $('.js-PeopleLooker-nav').addClass('active');
    } else if (currentParent.hasClass('js-JavaScript-nav')) {
      $('.js-JavaScript-nav').addClass('active');
    }
  });
}

const inputValidationsHandler = () => {
  const $individualInputs = $('.bv-input input, .bv-input select');

  $individualInputs.on('focus', function() {
    $(this).parents('[class^=bv-input]').addClass('active');
  });

  $individualInputs.on('focusout', function() {
    $(this).parents('[class^=bv-input]').removeClass('active');
  });

  $('input').on('keyup', function () {
    $(this).valid();
  });

  // Set data attribute to use for styling label when not a required field
  $individualInputs.blur(function() {
    isNotRequiredInputFilled($(this));
  });
  
  const isNotRequiredInputFilled = function(element) {
    $.trim(element.val()) ? element.attr('filled', 'true') : element.attr('filled', 'false');
  };

  // Define custom validation rules
  $.validator.addMethod("atLeastOneLetter", function(value, element) {
    return /[a-z]+/i.test(value);
  }, "Alphabetic characters required");
  $.validator.addMethod("noEmptySpacesOnly", function(value, element) {
      return value == '' || value.trim().length != 0;
  }, "Empty/blank search not allow");
  $.validator.addMethod("notEmail", function(value, element) {
      return this.optional(element) || !/^[ a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[ a-zA-Z0-9](?:[ a-zA-Z0-9-]{0,61}[ a-zA-Z0-9])?(?:\.[ a-zA-Z0-9](?:[ a-zA-Z0-9-]{0,61}[ a-zA-Z0-9])?)*$/.test(value);
  }, "Email addresses are not searchable here");
  $.validator.addMethod("emptyOrletters", function(value, element) {
      return (value.trim() !== '' && /[a-z]+/i.test(value)) || (value.trim() === '');
  }, "Alphabetic characters required");

  // People Search Validation
  const validatePeople = function() {  

    $('form').each(function(){
      $(this).validate({
        validClass: "success",
        ignore: "",
        highlight: function(element) {
          $(element).removeClass('success').addClass('error');
          $(element).parents('[class^=bv-input]').removeClass('success').addClass('error');
  
          $(element).siblings('label.error').removeClass('success');
        },
        unhighlight: function(element) {
          var topLevelParentWrapper = $(element).parent().parent();
          $(element).removeClass('error');
          $(element).parent().removeClass('error');
          // Check if html structure is for multi-input fields
          if (topLevelParentWrapper.hasClass('bv-input--multi')) {
            if (!topLevelParentWrapper.children().hasClass('error')) {
              $(element).closest('.bv-input--multi').removeClass('error');
            }
          }
        },
        success: function(element) {  
          $(element).addClass('success');
          $(element).parent().addClass('success');
        },
        rules: {
            fn: {
                required: true,
                notEmail: true,
                noEmptySpacesOnly: true,
                atLeastOneLetter: true,
            },
            ln: {
                required: true,
                notEmail: true,
                noEmptySpacesOnly: true,
                atLeastOneLetter: true,
            },
            "city": {
                notEmail: true,
                emptyOrletters: true,
            },
        },
        messages: {
            fn: "Please enter a first name",
            ln: "Please enter a last name",
            city: "Please enter a valid city",
        },
        onkeyup: false,
        onclick: false,
        onsubmit: true,
        submitHandler: function (form, event) {
          event.preventDefault();
  
        }
      });
    });
  }
  validatePeople();
}

const initialize = () => {
  activeClassesHandler();
  inputValidationsHandler();
}

export { initialize };
