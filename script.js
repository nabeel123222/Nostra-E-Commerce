var navbarmanu = document.querySelector(".navbar-menu-toggle")
var sidenav = document.querySelector(".side-navbar")
var dontshow = document.getElementById("dont-show")


navbarmanu.addEventListener("click", function () {
    sidenav.style.left = "0"
})

dontshow.addEventListener("click", function () {
    sidenav.style.left = "-70%"
})