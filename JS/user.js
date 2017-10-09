$(document).ready(function() {
    $('.humb').click(function() {
        $('.nav').toggleClass('active');
    });
    
 $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".navigation").length == 0) {
            $(".nav").removeClass("active");
        }
    });
    
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
  
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
     {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
      
  ]  
});
});

