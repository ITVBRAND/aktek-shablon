document.querySelectorAll(".lines__dotted").forEach((dotted, index) => {
    dotted.addEventListener("mouseenter", () => {
        document.querySelectorAll(".lines__item").forEach(item => item.style.opacity = "0");
        document.querySelectorAll(".lines__item")[index].style.opacity = "1";
        document.querySelectorAll(".lines__item")[index].style.transform = "translateY(0)";
    });

    dotted.addEventListener("mouseleave", () => {
        document.querySelectorAll(".lines__item")[index].style.opacity = "0";
        document.querySelectorAll(".lines__item")[index].style.transform = "translateY(10px)";
    });
});