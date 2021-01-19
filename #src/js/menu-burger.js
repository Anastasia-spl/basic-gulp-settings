(() => {
    const burgerBtnRef = document.querySelector('[data-burger-btn]');
    const mobileMenuRef = document.querySelector('[data-mobile-menu]');
    const body = document.querySelector('body');
    
    burgerBtnRef.addEventListener("click", (event) => {
        const expanded =
            burgerBtnRef.getAttribute("aria-expanded") === "true" || false;
    
        burgerBtnRef.classList.toggle("is-open");
        burgerBtnRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
        if(mobileMenuRef.classList.contains("is-open")) {
            body.style.overflow = 'hidden';
        } else ( body.style.overflow = "auto" )
    });
    
    mobileMenuRef.addEventListener('click', (event) => {
         if(event.target.classList.contains('nav__mobile-overlay')) {
            mobileMenuRef.classList.remove("is-open");
            body.style.overflow = "auto"
         }
        }) 
    
    })();