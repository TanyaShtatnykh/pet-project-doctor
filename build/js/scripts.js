




$(function () {
    $('.header__burger-btn').on('click', function() {
      $(this).toggleClass('header__burger-btn--open');
      $('.header__area').toggleClass('header__area--open');
      $('.header__menu').toggleClass('header__menu--open');
      $('.header__contact').toggleClass('header__contact--open');
    
      if ($(this).hasClass('header__burger-btn--open')) {
        $('.header__menu-link').on('click', function () {
          $('.header__burger-btn').toggleClass('header__burger-btn--open');
          $('.header__area').toggleClass('header__area--open');
          $('.header__menu').toggleClass('header__menu--open');
          $('.header__contact').toggleClass('header__contact--open');
        })
      };
    });
  });
$(function() {
  $('#tabs').tabs({
  });
});

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
$(function () {
    $('.price__list').slick({
      dots: true,
      arrows: false,
      adaptiveHeight: true
    });
  });
$(function () {
  $('.reviews__slides').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true
  });
});
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
      $('.welcome__photo').insertAfter('.welcome__social');
    };
  });