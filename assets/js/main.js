window.addEventListener('load', function() {
  const allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function(el) {
      const includePath = el.dataset.includePath;
      if (includePath) {
          let xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                  el.outerHTML = this.responseText;
              }
          };
          xhttp.open('GET', includePath, true);
          xhttp.send();
          return;
      }
  });
});

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


new Swiper(".heroSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: "#hero-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#hero-swiper .swiper-button-next",
    prevEl: "#hero-swiper .swiper-button-prev",
  },
});

new Swiper(".cardSwiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: "#card-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#card-swiper .swiper-button-next",
    prevEl: "#card-swiper .swiper-button-prev",
  },
});

new Swiper(".prodSwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: "#prod-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#prod-swiper .swiper-button-next",
    prevEl: "#prod-swiper .swiper-button-prev",
  },
});

document.addEventListener('click', function(){
  const select = document.getElementById('select');

  
});


