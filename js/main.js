$(function () {
  $('.header__btn').on('click', function () {
    $('.uppersider__menu').removeClass('uppersider__menu-close');
  });
  $('.uppersider__menu__close').on('click', function () {
    $('.uppersider__menu').addClass('uppersider__menu-close');
  });

  $('.categories__items').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',
    prevArrow: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

    ]
  });


  $('.catalog__features__link').on('click', function () {
    if ($('.catalog__features').hasClass('one')) {
      $('.catalog__features__link').not($(this)).removeClass('active');
      $('.catalog__features__list').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);

  });
  $('.accordion__language__link').on('click', function () {
    if ($('.accordion__language').hasClass('one')) {
      $('.accordion__language__link').not($(this)).removeClass('active');
      $('.accordion__language__box').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);

  });
  $('.menu__button').on('click', function () {
    $('.menu').toggleClass('menu__open');
  });

  // $('.catalog__title').on('click', function () {
  //   if ($('.catalog__row').hasClass('one')) {
  //     $('.catalog__title').not($(this)).removeClass('active');
  //     $('.catalog__list').not($(this).next()).slideUp(300);
  //   }
  //   $(this).toggleClass('active').next().slideToggle(300);

  // });

  // $('.catalog__filter__title').on('click', function () {
  //   if ($('.catalog__filter').hasClass('one')) {
  //     $('.catalog__filter__title').not($(this)).removeClass('active');
  //     $('.catalog__features').not($(this).next()).slideUp(300);
  //   }
  //   $(this).toggleClass('active').next().slideToggle(300);

  // });

})

