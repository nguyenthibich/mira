$(document).ready(function () {

})

var swiper = new Swiper(".swiper-banner", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var slideImages = document.querySelectorAll(".mySwiper .swiper-slide .swiper-content");
var maxHeight = 0;
slideImages.forEach(function (image) {
    if (image.offsetHeight > maxHeight) {
        maxHeight = image.offsetHeight;
    }
});
var swiperContainer = document.querySelector(".mySwiper");
swiperContainer.style.height = maxHeight + "px";


var swiper = new Swiper(".swiper-2row", {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var slideImages1 = document.querySelectorAll(".swiper-2row .swiper-slide .swiper-content");
var maxHeight1 = 0;
slideImages1.forEach(function (image) {
    if (image.offsetHeight > maxHeight1) {
        maxHeight1 = image.offsetHeight;
    }
});
var swiperContainer1 = document.querySelector(".swiper-2row");
swiperContainer1.style.height = (maxHeight1*2 + 50) + "px";


var swiper = new Swiper(".swiper-normal", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
var slideImages2 = document.querySelectorAll(".swiper-normal .swiper-slide .swiper-content");
var maxHeight2 = 0;
slideImages2.forEach(function (image) {
    if (image.offsetHeight > maxHeight2) {
        maxHeight2 = image.offsetHeight;
    }
});
var swiperContainer2 = document.querySelector(".swiper-normal");
swiperContainer2.style.height = maxHeight2 + "px";