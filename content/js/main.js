$document.ready(function () {
    new WOW().init();


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
                
            }
        }
    })
});