//$(document).ready(function(){
//    $("#navbar_toggler ul li a").click(function(){
//        $("#navbar_toggler ul li a").addClass("current");
//    });
////});
//$(function () {
//    // nav-menu scrolling
//    $('#navbar_toggler ul li a').on('click', function () {
//        $('.navbar-collapse').removeClass('show');
//
//    })
//    $('a[href*="#"]:not([href="#"])').on('click', function () {
//        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//            if (target.length) {
//                $htmlbody.animate({
//                    scrollTop: target.offset().top - 70
//                }, 1000);
//                return false;
//            }
//        }
//    });
//});

$(function () {
    $('#portfolio_slick').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    });
    $('#tesimonial_slick').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    
    // slick slider 
    
     $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut();
    });
});


