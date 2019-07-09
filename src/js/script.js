$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        smartSpeed:450,
        dots:true,
        dotClass: 'pagination-item',
        dotsClass: 'pagination'
    });

    new WOW().init();
});
