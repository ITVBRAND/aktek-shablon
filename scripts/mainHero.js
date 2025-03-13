const openModalVideoBtns = document.querySelectorAll('.hero__video-btn');
const closeModalVideoBtn = document.querySelector('.hero__video-close');
const modalVideoWrapper = document.querySelector('.hero__video-wrapper');

// Функция открытия модального окна
openModalVideoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modalVideoWrapper.classList.add('active');
    });
});

// Закрытие окна на крестик
closeModalVideoBtn.addEventListener('click', () => {
    modalVideoWrapper.classList.remove('active');
});

// Закрытие окна при клике вне окна
modalVideoWrapper.addEventListener('click', (e) => {
    if (e.target === modalVideoWrapper) {
        modalVideoWrapper.classList.remove('active');
    }
});