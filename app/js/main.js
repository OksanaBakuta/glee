$(function(){
  
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