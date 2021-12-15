$(document).ready(function () {
    $(".section-instructor__carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 250,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                margin: 20,
                items: 2
            },
            768: {
                items: 3,
            },
        }

    });
});