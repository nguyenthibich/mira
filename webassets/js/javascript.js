$(document).ready(function () {
    $('.dropdown-toggle').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.toggle-box').click(function() {
        $('.header-menu').toggleClass('active')
    })

    $('.filter-box').click(() => {
        const breadcrumbHeight = $('.product-breadcrumbs .breadcrumb-box').height() + 60;
        $('.product-left').toggleClass('show').css('top', breadcrumbHeight);
    });
});

var heightPagination = document.querySelector('.swiper-pagination')?.offsetHeight;

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
if(swiperContainer) {
    swiperContainer.style.height = maxHeight + "px";
}


var swiper = new Swiper(".swiper-2row", {
    slidesPerView: 2,
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
                rows: 2,
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

var windowWidth = jQuery(window).width();
if(swiperContainer1) {
    if(windowWidth >= 768) {
        swiperContainer1.style.height = maxHeight1 * 2 + heightPagination + 80 + "px";
    } else {
        swiperContainer1.style.height = maxHeight1 + heightPagination + "px";
    }
}

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
            slidesPerView: 2,
            spaceBetween: 22,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1280: {
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
if(swiperContainer2) {
    swiperContainer2.style.height = maxHeight2 + heightPagination + "px";
}

var swiper = new Swiper(".product-banner", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var slideImages4 = document.querySelectorAll(
    ".product-banner .swiper-slide img"
);
var maxHeight4 = 0;
slideImages4.forEach(function (image) {
    if (image.offsetHeight > maxHeight4) {
        maxHeight4 = image.offsetHeight;
    }
});

var swiperContainer4 = document.querySelector(".product-banner");
if(swiperContainer4) {
    swiperContainer4.style.height = maxHeight4 + "px";
    // if(windowWidth >= 1024) {
    //     swiperContainer4.style.height = maxHeight4 + "px";
    // } else  {
    //     swiperContainer4.style.height = 270 + "px";
    // }
}

var swiper = new Swiper(".product-banner-1", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var slideImages5 = document.querySelectorAll(
    ".product-banner-1 .swiper-slide img"
);
var maxHeight5 = 0;
slideImages5.forEach(function (image) {
    if (image.offsetHeight > maxHeight5) {
        maxHeight5 = image.offsetHeight;
    }
});

var swiperContainer5 = document.querySelector(".product-banner-1");
if(swiperContainer5) {
    swiperContainer5.style.height = maxHeight5 + "px";
}

var swiper = new Swiper(".product-hot-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 22,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
var slideImages6 = document.querySelectorAll(
    ".product-hot-swiper .swiper-slide .swiper-content"
);
var maxHeight6 = 0;
slideImages6.forEach(function (image) {
    if (image.offsetHeight > maxHeight6) {
        maxHeight6 = image.offsetHeight;
    }
});

var swiperContainer6 = document.querySelector(".product-hot-swiper");
if(swiperContainer6) {
    swiperContainer6.style.height = maxHeight6 + heightPagination + "px";
}



