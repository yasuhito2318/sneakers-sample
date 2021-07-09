$(function(){
    $('.menu').click(function(){
        $('.header').toggleClass('open');
    })
    $('.menu-background').click(function(){
        $('.header').toggleClass('open');
    })

    $(window).scroll(function () {
        $(".fadein").each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
            $(this).addClass("effect-scroll");
            $(this).removeClass('first-fade');
            }
        });
    });
    jQuery(window).scroll();

    $('#top').click(function(){
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $('#pick').click(function(){
        $('body, html').animate({ scrollTop: $('.pick-wrapper').offset().top-30 }, 500);
        $('.header').toggleClass('open');
        return false;
    });

    $('#feature').click(function(){
        $('body, html').animate({ scrollTop: $('.feature-wrapper').offset().top-30 }, 500);
        $('.header').toggleClass('open');
        return false;
    });

    $('#contact').click(function(){
        $('body, html').animate({ scrollTop: $('.contact-wrapper').offset().top-80 }, 500);
        $('.header').toggleClass('open');
        return false;
    });

});

var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 1.7,
    centeredSlides: true,
    spaceBetween: 40,
    breakpoints : {
        769:{
            slidesPerView: 3.7,
            spaceBetween: 60,
        }
    }
});
