const menu = document.querySelector(".menu")
const nav = document.querySelector("nav ul")
const menuImg = document.querySelector(".menu img")

menu.addEventListener("click", function() {
    nav.classList.toggle("active")

    if(menuImg.getAttribute("src") === "assets/img/menu/open.svg") {
        menuImg.setAttribute("src", "assets/img/menu/close.svg")
    }
    else {
        menuImg.setAttribute("src", "assets/img/menu/open.svg")
    }
})