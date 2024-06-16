
$(document).ready(function(){
    $('.center-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true
    });
});

$('.logos-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
    breakpoint: 768,
    settings: {
    slidesToShow: 3
    }
    }, {
    breakpoint: 520,
    settings: {
    slidesToShow: 2
    }
    }]
    });


