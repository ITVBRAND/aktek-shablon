var sertificateSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".about-button-next",
        prevEl: ".about-button-prev",
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
    }
});