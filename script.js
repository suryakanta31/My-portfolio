$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>=80){
        $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header');
    }
});

//docoment ready
$(document).ready(function(){
    //Typing animation
    new Typed('#type-it', {
        strings: ['Full-stack java developer', 'Java developer' , 'Frontend developer', 'Backend developer'],
        typeSpeed:80,
        loop:true
    });
    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:2,
        margin:30,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
        }
    });
    //one page scroll

    $.scrollIt({
        easing: 'linear',      // the easing function for animation
        topOffset: -70          // offste (in px) for fixed top navigation
      });
});