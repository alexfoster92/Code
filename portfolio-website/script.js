// function hamburgerToggle(x) {
//     x.classList.toggle("change-hamburger");
// }

let hamburger = document.querySelector(".nav-hamburger");
let dropDownMenu = document.querySelector(".navbar-nav");
let menuStatus = false;

dropDownMenu.style.display = "none";

function menuToggle() {
    if (menuStatus == false) {
        dropDownMenu.style.display = "block";
        menuStatus == true;
    } else if (menuStatus == true) {
        dropDownMenu.style.display = "none";
        menuStatus == false;
    }
}

hamburger.onclick = menuToggle;