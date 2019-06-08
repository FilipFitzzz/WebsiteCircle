/* Home Page */

$('.products-box-container').slick({
    infinite: true,
    dots: false,
    arrows: false,
    // prevArrow: '<button type="button" class="swibtn1"><img src="./picture/nav-icons/play-button 2.svg" alt=""></button>',
    // nextArrow: '<button type="button" class="swibtn2"><img src="./picture/nav-icons/play-button.svg" alt=""></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
});

$('.swibtn1').click(function() {
    $('.products-box-container').slick('slickPrev');
});

$('.swibtn2').click(function() {
    $('.products-box-container').slick('slickNext');
});

/* Shop Page */
$('.slider-product-new').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1
});

$('.slider-btnleft').click(function() {
    $('.slider-product-new').slick('slickPrev');
});

$('.slider-btnright').click(function() {
    $('.slider-product-new').slick('slickNext');
});