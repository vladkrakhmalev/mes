setInterval(function () {
  let sliderCountAll = $('.slider-facts__slide').length;
  let sliderCount = sliderCountAll - $('.slider-facts__slide.slick-cloned').length;
  $('.slider-facts__current').text(
    $('.facts .slider-facts__container').slick('slickCurrentSlide') + 1
  );
  $('.slider-facts__total').text(sliderCount);
}, 10);

$('.input__field[value]').parents('.input').addClass('input_blur');
$('.input__select option[selected]').parents('.input').addClass('input_blur');
$('.input__field').focus(function () {
  $(this).parents('.input').removeClass('input_blur').removeClass('input_error').addClass('input_focus');
});
$('.input__field').blur(function () {
  if ($(this).val() != '') {
    $(this).parents('.input').removeClass('input_focus').addClass('input_blur');
  } else {
    $(this).parents('.input').removeClass('input_focus').removeClass('input_blur');
  }
});
$('.input__chexbox').click(function () {
  $(this).removeClass('input_blur').removeClass('input__agree_error');
});


$(document).ready(function () {
  $('.header .menu__item').mouseover(function () {
    let numberMenuItem = $(this).data('menu-item');
    let allSubmenu = $('.submenu');
    let showSubmenu = $('.submenu[data-menu-item=' + numberMenuItem + ']');
    allSubmenu.removeClass('submenu_open');
    showSubmenu.addClass('submenu_open');
  });
  $('.header .container').mouseleave(function () {
    $('.header .submenu_open').removeClass('submenu_open');
  });
  $('.header__logo, .header__title, .header__wrapper, .header__search, .header__profile').mouseenter(function () {
    $('.header .submenu_open').removeClass('submenu_open');
  });

  $('.file__input').change(function(e) {
    let file = $(this).closest('.file');
    if (file.children('.file__name')) {
      file.children('.file__name').remove();
    }
    file.append('<p class="file__name">' + e.target.files[0].name + '</p>');
  })

  $('.mainscreen .slider__container').slick({
    dots: true,
    appendArrows: $('.slider__navigation'),
    appendDots: $('.slider__pagination'),
    prevArrow: '<div class="slider__button slider__button_prev"></div>',
    nextArrow: '<div class="slider__button slider__button_next"></div>',
    autoplay: true,
    autoplaySpeed: 7000,
  });

  $('.facts .slider-facts__container').slick({
    appendArrows: $('.slider-facts__navigation'),
    prevArrow: '<div class="slider-facts__button slider-facts__button_prev"><div class="icon"></div></div>',
    nextArrow: '<div class="slider-facts__button slider-facts__button_next"><div class="icon"></div></div>',
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.popup-modal').magnificPopup({
    type: 'inline',
  });
});