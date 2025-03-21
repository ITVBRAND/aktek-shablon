var catalogSwiper = new Swiper(".catalogSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".catalog-button-next",
        prevEl: ".catalog-button-prev",
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
    },
});

var sertificateSwiper = new Swiper(".sertificateSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".sertificate-button-next",
        prevEl: ".sertificate-button-prev",
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
    }
});

var videoSwiper = new Swiper(".videoSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".video-button-next",
        prevEl: ".video-button-prev",
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});