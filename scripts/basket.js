const basketBtn = document.querySelector('.basket');
const basketWrapper = document.querySelector('.basket__wrapper');
const modalCloseBtn = document.querySelector('.basket__close');

// Открытие модального окна
basketBtn.addEventListener('click', () => {
    basketWrapper.style.visibility = 'visible',
    basketWrapper.style.opacity = '1';
});

// Закрытие модального окна
modalCloseBtn.addEventListener('click', () => {
    basketWrapper.style.visibility = 'hidden',
    basketWrapper.style.opacity = '0';
});

// Дополнительно: закрытие по клику вне модального окна
basketWrapper.addEventListener('click', (e) => {
    if (e.target === basketWrapper) {
        basketWrapper.style.visibility = 'hidden',
        basketWrapper.style.opacity = '0';
    }
});

// Скрываем модалку по умолчанию
basketWrapper.style.visibility = 'hidden',
basketWrapper.style.opacity = '0';


// больше меньше товара
const basket = document.querySelector('.basket__list');

basket.addEventListener('click', (e) => {
    if (e.target.classList.contains('basket__control--plus')) {
        const input = e.target.previousElementSibling;
        let value = parseInt(input.value);
        if (value < parseInt(input.max)) {
            input.value = value + 1;
        }
    }

    if (e.target.classList.contains('basket__control--minus')) {
        const input = e.target.nextElementSibling;
        let value = parseInt(input.value);
        if (value > parseInt(input.min)) {
            input.value = value - 1;
        }
    }
});

//обновление товаров в корзине

const basketList = document.querySelector('.basket__list');
const basketNumber = document.querySelector('.basket__number');

// Функция для обновления количества товаров
function updateBasketCount() {
    const items = basketList.querySelectorAll('.basket__item');
    basketNumber.textContent = items.length;
}

// Удаление товара
basketList.addEventListener('click', (e) => {
    if (e.target.classList.contains('basket__control--close')) {
        const basketItem = e.target.closest('.basket__item');
        if (basketItem) {
            basketItem.remove();
            updateBasketCount();
        }
    }
});

// Можно также вызвать updateBasketCount() при инициализации
updateBasketCount();