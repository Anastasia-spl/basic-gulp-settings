(() => {
const burgerBtnRef = document.querySelector('[data-burger-btn]');
const mobileMenuRef = document.querySelector('[data-mobile-menu]');

burgerBtnRef.addEventListener("click", () => {
    const expanded =
        burgerBtnRef.getAttribute("aria-expanded") === "true" || false;

    burgerBtnRef.classList.toggle("is-open");
    burgerBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
});
})();