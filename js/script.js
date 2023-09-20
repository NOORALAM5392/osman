$('.main_slider').slick({
    arrows: false,
    dots: true
});
$('.main').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<h1 class="prev"><</h1>',
    nextArrow: '<h1 class="next">></h1>',
});