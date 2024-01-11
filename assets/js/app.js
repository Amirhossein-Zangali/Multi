const goTop = document.querySelector(".go-top");
const nav = document.querySelector("nav")
window.addEventListener("scroll" , () => {
    window.scrollY > 500 ? goTop.classList.remove("hidden") : goTop.classList.add("hidden");
    window.scrollY > 700 ? nav.classList.add("scroll_nav") : nav.classList.remove("scroll_nav");
})