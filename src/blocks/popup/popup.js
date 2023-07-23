$(function () {
  $('.welcome__appointment').on('click', function () {
    $('.popup').addClass('popup--open');
  });

  $('.option__btn').on('click', function () {
    $('.popup').addClass('popup--open');
  });
  
  $('.popup__close').on('click', function () {
    $('.popup').removeClass('popup--open');
  })
});