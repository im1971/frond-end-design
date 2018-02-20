/*
 * JavaScripts for TAS
 * */

jQuery(document).ready(function($) {
   // Slick Slider setup
    $('.op-img-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".navbar").css("background" , "#000");
            $(".navbar").css("opacity" , ".7");
            //$('.logo').css({"height":"50px"});
            //$('.nav>li').css({"padding":"10px 20px"});
            //$('.navbar-brand').css({"padding":"0px 0px 0px 15px"});
        }

        else{
            //$(".navbar").css("background" , "#333");
            $('.navbar').css({"background":"transparent"});
            //$('.logo').css({"height":"100px"});
            //$('.nav>li').css({"padding":"50px 20px"});
            //$('.navbar-brand').css({"padding":"15px"});
        }
    });
});

