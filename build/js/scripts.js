





$(function() {
  $('#tabs').tabs({
  });
});


$(function () {
  $('.welcome__appointment').on('click', function () {
    $('.popup').addClass('popup--open');
  });
  
  $('.popup__close').on('click', function () {
    $('.popup').removeClass('popup--open');
  })
});


$(function () {
  $('.reviews__area').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true
  });
});
