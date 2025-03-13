const dottedItems = document.querySelectorAll('.lines__dotted');
const infoItems = document.querySelectorAll('.lines__item');

const showItem = (index) => {
    infoItems.forEach(item => {
        item.style.opacity = "0";
        item.style.pointerEvents = "none";
        item.style.transform = "translateY(10px)";
    });
    infoItems[index].style.opacity = "1";
    infoItems[index].style.pointerEvents = "auto";
    infoItems[index].style.transform = "translateY(0)";
};

const hideItem = (index) => {
    infoItems[index].style.opacity = "0";
    infoItems[index].style.pointerEvents = "none";
    infoItems[index].style.transform = "translateY(10px)";
};

dottedItems.forEach((dotted, index) => {
    dotted.addEventListener('mouseenter', () => {
        showItem(index);
    });

    dotted.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!infoItems[index].matches(':hover')) {
                hideItem(index);
            }
        }, 200);
    });

    infoItems[index].addEventListener('mouseleave', () => {
        hideItem(index);
    });

    infoItems[index].addEventListener('mouseenter', () => {
        showItem(index);
    });
});
