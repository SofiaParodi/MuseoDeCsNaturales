// b u r g u e r  m e n u
const nav = document.querySelector("#header__nav");
const openBtn = document.querySelector("#burger-menu__open");
const closeBtn = document.querySelector("#burger-menu__close")

openBtn.addEventListener("click", () => {
    nav.classList.add("header__nav-visible");
})

closeBtn.addEventListener("click", () => {
    nav.classList.remove("header__nav-visible");
    
})

// f o r m
const successMessage = document.querySelector("#success__message");
const form = document.querySelector("#success__form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.classList.add("section__success-visible");
    form.classList.add("section__form-invisible");
});
