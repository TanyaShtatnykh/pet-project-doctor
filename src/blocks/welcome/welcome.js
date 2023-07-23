$(window).on('load resize', function() {
    if ($(window).width() < 992) {
      $('.welcome__photo').insertAfter('.welcome__social');
    };
  });