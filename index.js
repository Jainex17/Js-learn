
// menubar
let menu = document.getElementById("nav-menu");
menu.addEventListener("click", togglenavbar);
function togglenavbar() {
  const navbar = document.querySelector(".full-navbar");
  navbar.classList.toggle("active");
}


// skicky navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector("body");
  header.classList.toggle("skicky", window.scrollY > 300);
});

// img swiper
var swiper = new Swiper(".myimgSwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* swiper  */
var swiper = new Swiper(".catSwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  
});
