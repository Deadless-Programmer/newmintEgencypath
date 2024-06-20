$(document).ready(function(){
    $('.center-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    centerMode: false, // Disable center mode on mobile
                    arrows: true // Show arrows on mobile
                }
            }
        ]
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


