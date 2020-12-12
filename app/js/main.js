$(function(){

  $('.related-products__slide').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    /* autoplay: true,
    autoplaySpeed: 3000, */
    prevArrow: '<button class="slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)" /></svg ></button>',
    nextArrow: '<button class="slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path class="cls-1" d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)" /></svg ></button>',
  });
  
  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();

    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

  $('.product-one__content-num').styler();

  $('.product-slider__big').slick({
    asNavFor: '.product-slider__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });
  $('.product-slider__thumb').slick({
    asNavFor: '.product-slider__big',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
    vertical: true,
  });


  $('.star').rateYo({
    starWidth: '11px',
    readOnly: true,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg >'
  });

  $('.filter-prise__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,


    onStart: function (data) {
      $('.filter-prise__from').text(data.from);
      $('.filter-prise__to').text(data.to);
    }, 

    onChange: function (data) {
      $('.filter-prise__from').text(data.from);
      $('.filter-prise__to').text(data.to);
    },

  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  var mixer = mixitup('.product-filter__items',{
    selectors: {
      control: '.product-filter__btn'
    }
  });
  
  var mixer = mixitup('.desing__items', {
    selectors: {
      control: '.desind-filter__btn'
    }
  });
  
});