$(document).ready(function () {
    if (window.matchMedia("(max-width: 768px)").matches) {  
        $('.goals .goals-wrapper').removeClass('owl-carousel');
        $('.goals .goals-wrapper').removeClass('owl-theme');
        $('.goals .goals-wrapper').addClass('wrapper');
    }
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Toggle mobile navbar
    $('.nav-icon').click(function () {
        $('.nav-mobile').toggleClass('active');
    });
    $('.close-icon').click(function () {
        $('.nav-mobile').removeClass('active');
    });

    $('.nav-mobile .nav-links li a').click(function () {
        console.log('clicked');
        $('.nav-mobile').removeClass('active');
    });

});
