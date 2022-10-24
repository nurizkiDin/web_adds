function chatWa() {
    window.open('https://api.whatsapp.com/send?phone=6281318418028');
}

var sliderIndex = 0;
var slideIndex = 1;
showSlider(slideIndex);

function plusSlider(n) {
    showSlider(slideIndex += n);
}
function showSlider(n) {
    var i;
    var x = document.getElementsByClassName("img-slider");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.opacity = "1";
    x[slideIndex-1].style.display = "block";
}
function menuHp(x) {
    let menu = document.getElementById("navhp");
    if (menu.style.display === "block") {
        menu.style.opacity = "0";
        menu.style.display = "none";
    } else {
        menu.style.opacity = "1";
        menu.style.display = "block";
    }
    x.classList.toggle("change");
}
// carousel();
// function carousel() {
//     let x = document.getElementsByClassName("img-slider");
//     for (let i = 0; i < x.length; i++) {
//         x[i].style.opacity = "0";
//         x[i].style.display = "none";
//     }
//     sliderIndex++;
//     if (sliderIndex > x.length) {sliderIndex = 1}
//     x[sliderIndex-1].style.opacity = "1";
//     x[sliderIndex-1].style.display = "block";
//     setTimeout(carousel, 5000);
//     return sliderIndex;
// }