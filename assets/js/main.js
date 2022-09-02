document.onscroll = headerFixed;

function headerFixed() {
  let header = document.querySelector('header');
  let headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight){
    document.querySelector('header').classList.add('fixed');
  } else {
    document.querySelector('header').classList.remove('fixed');
  }
}


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});