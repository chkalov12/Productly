$(function() {
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('.strateg__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1176,
            settings: {
                slidesToShow: 2,
            }
        }],
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        }]

    });



});