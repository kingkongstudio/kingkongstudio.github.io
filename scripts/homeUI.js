const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
var iconMenu = document.getElementById("iconMenu");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    var isActive = menuBtn.classList.contains("active");
    if (isActive) {
        iconMenu.classList.remove("fa-bars");
        iconMenu.classList.add("fa-xmark");
    } else {
        iconMenu.classList.remove("fa-xmark");
        iconMenu.classList.add("fa-bars");
    }
})

//javascript for video
const btns = document.querySelectorAll(".nav-btn");
const videoSliders = document.querySelectorAll(".video-slider");
var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    videoSliders.forEach((videoSlider) => {
        videoSlider.classList.remove("active");
    });
    btns[manual].classList.add("active");
    videoSliders[manual].classList.add("active");
}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
