document.querySelectorAll('.work__accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        
        // Закрываем все остальные открытые аккордеоны
        document.querySelectorAll('.work__accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.work__accordion-body').style.maxHeight = null;
            }
        });

        // Переключаем текущий аккордеон
        const body = accordionItem.querySelector('.work__accordion-body');
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            body.style.maxHeight = null;
        } else {
            accordionItem.classList.add('active');
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });
});
