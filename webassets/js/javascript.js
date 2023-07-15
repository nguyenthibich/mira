$(document).ready(function () { });

var heightPagination = document.querySelector('.swiper-pagination').offsetHeight;

var swiper = new Swiper(".swiper-banner", {
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});
var slideImages = document.querySelectorAll(
    ".swiper-banner .swiper-slide .swiper-content"
);
var maxHeight = 0;
slideImages.forEach(function (image) {
    if (image.offsetHeight > maxHeight) {
        maxHeight = image.offsetHeight;
    }
});
var swiperContainer = document.querySelector(".swiper-banner");
swiperContainer.style.height = maxHeight + "px";

var swiper = new Swiper(".swiper-2row", {
    slidesPerView: 1,
    spaceBetween: 18,
    grid: {
        rows: 1,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 18,
            grid: {
                rows: 1,
            },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
            grid: {
                rows: 1,
            },
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 18,
            grid: {
                rows: 2,
            },
        },
    },
});

var slideImages1 = document.querySelectorAll(
    ".swiper-2row .swiper-slide .swiper-content"
);
var maxHeight1 = 0;
slideImages1.forEach(function (image) {
    if (image.offsetHeight > maxHeight1) {
        maxHeight1 = image.offsetHeight;
    }
});
var swiperContainer1 = document.querySelector(".swiper-2row");
swiperContainer1.style.height = maxHeight1 * 2 + heightPagination + 80 + "px";

var swiper = new Swiper(".swiper-normal", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
    },
});
var slideImages2 = document.querySelectorAll(
    ".swiper-normal .swiper-slide .swiper-content"
);
var maxHeight2 = 0;
slideImages2.forEach(function (image) {
    if (image.offsetHeight > maxHeight2) {
        maxHeight2 = image.offsetHeight;
    }
});
var swiperContainer2 = document.querySelector(".swiper-normal");
swiperContainer2.style.height = maxHeight2 + heightPagination + "px";
