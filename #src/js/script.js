@@include('slick.js');
$(document).ready(function () {
  
  $('.header__burger').click(function(event){
    $('.header__burger, .container').toggleClass('active');
  });
  
  
  
  $('.programs__slider').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1500,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    waitForAnimate: false,
    //centerMode:true,
    //variableWidth: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
        }, {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 1000,
          easingng: 'ease',
          infinite: true,


        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          //centerPadding: '60px',
        }

      }
      ]
  });
  $('.instagram__content').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        }
      },{
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          leftPadding: '60px',
        }
      },{
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          leftPadding: '60px',
        }
      }
    ]
  });

  $('.aboutus__slider-small').slick({
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    easing: 'ease',
    infinite: true,
    touchThreshold: 10,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".aboutus__slider-large"
  });

  $('.aboutus__slider-large').slick({
    arrows: false,
    fade: true,
    asNavFor: ".aboutus__slider-small"
  })
});
