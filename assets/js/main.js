const nav = document.querySelector("#header__nav");
const openBtn = document.querySelector("#burger-menu__open");
const closeBtn = document.querySelector("#burger-menu__close")

openBtn.addEventListener("click", () => {
    nav.classList.add("header__nav-visible");
})

closeBtn.addEventListener("click", () => {
    nav.classList.remove("header__nav-visible");
})