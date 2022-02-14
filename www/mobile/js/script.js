// menu
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
var navBarparent = navBar.parentElement;

console.log(navBarparent)

toggleButton.addEventListener('click', function () {
    navBarparent.classList.toggle('toggle');
});

// section2  swiper slide
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // section3 swiper slide
  var swiper = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
    },
  });