/*burger menu start*/

document.addEventListener("DOMContentLoaded", function () {
    const burgerButtons = document.querySelectorAll(".header__burger");
    const burgerMenu = document.querySelector(".burger__menu");
    const closeButton = document.querySelector(".burger__close");

    // Добавляем класс для анимации
    burgerMenu.style.transition = "transform 0.3s ease-in-out";
    burgerMenu.style.transform = "translateX(100%)";
    burgerMenu.style.position = "fixed";
    burgerMenu.style.top = "0";
    burgerMenu.style.right = "0";
    burgerMenu.style.height = "100vh";
    burgerMenu.style.width = "80%";
    burgerMenu.style.backgroundColor = "var(--clr-dark)";

    // Открытие меню по клику на любую кнопку бургер-меню
    burgerButtons.forEach(button => {
        button.addEventListener("click", function () {
            burgerMenu.style.transform = "translateX(0)";
        });
    });

    // Закрытие меню
    closeButton.addEventListener("click", function () {
        burgerMenu.style.transform = "translateX(100%)";
    });

    // Закрытие при клике вне меню
    document.addEventListener("click", function (event) {
        if (!burgerMenu.contains(event.target) && !Array.from(burgerButtons).some(button => button.contains(event.target))) {
            burgerMenu.style.transform = "translateX(100%)";
        }
    });

    // Обработчики для каталога в бургер-меню
    const catalogBtns = document.querySelectorAll(".burger__catalog");
    const submenu = document.querySelector(".burger__submenu");
    const mainNav = document.querySelector(".burger__nav");
    const backBtn = document.querySelector(".submenu__back");

    catalogBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            submenu.classList.add("active");
            mainNav.style.display = "none";
        });
    });

    backBtn.addEventListener("click", function () {
        submenu.classList.remove("active");
        mainNav.style.display = "flex";
    });
});

/*burger menu end*/

/*header fixed and two catalog start*/

document.addEventListener("DOMContentLoaded", function () {
    const headerFixed = document.querySelector(".header__fixed");
    const headerDefault = document.querySelector(".header__default");

    // Начальное состояние фиксированного меню
    headerFixed.style.transition = "top 0.3s ease-in-out";
    headerFixed.style.position = "fixed";
    headerFixed.style.top = "-100px";
    headerFixed.style.width = "100%";
    headerFixed.style.zIndex = "1000";

    function handleScroll() {
        if (window.scrollY > 100) {
            headerFixed.style.top = "0";
            headerDefault.style.opacity = "0";
        } else {
            headerFixed.style.top = "-100px";
            headerDefault.style.opacity = "1";
            closeFixedCatalogMenu();
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Обработчики для двух разных каталогов
    const catalogButton = document.querySelector(".header__catalog");
    const catalogMenu = document.querySelector(".header__catalog-menu");

    const catalogButtonFixed = document.querySelector(".header__catalog-fixed");
    const catalogMenuFixed = document.querySelector(".header__catalog-menu__fixed");

    // Устанавливаем начальное состояние через CSS, а не через JS
    catalogMenu.style.display = "none";
    catalogMenuFixed.style.display = "none";

    function toggleMenu(menu, button) {
        if (menu.style.display === "none" || menu.style.opacity === "0") {
            menu.style.display = "block";
            setTimeout(() => {
                menu.style.opacity = "1";
                menu.style.transform = "translateY(0)";
            }, 10);
            button.classList.add("active");
        } else {
            closeMenu(menu, button);
        }
    }

    function closeMenu(menu, button) {
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-10px)";
        button.classList.remove("active");
        setTimeout(() => {
            menu.style.display = "none";
        }, 300);
    }

    function closeFixedCatalogMenu() {
        if (catalogMenuFixed.style.display === "block") {
            closeMenu(catalogMenuFixed, catalogButtonFixed);
        }
    }

    catalogButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu(catalogMenu, catalogButton);
    });

    catalogButtonFixed.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu(catalogMenuFixed, catalogButtonFixed);
    });
});

/*header fixed and two catalog end*/