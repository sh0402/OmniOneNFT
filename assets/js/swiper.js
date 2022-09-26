// SWIPER OPTION
new Swiper('.heroSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '#hero-swiper .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '#hero-swiper .swiper-button-next',
    prevEl: '#hero-swiper .swiper-button-prev'
  }
});

new Swiper('.issuSwiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '#issu-swiper .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '#issu-swiper .swiper-button-next',
    prevEl: '#issu-swiper .swiper-button-prev'
  }
});

new Swiper('.prodSwiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '#prod-swiper .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '#prod-swiper .swiper-button-next',
    prevEl: '#prod-swiper .swiper-button-prev'
  }
});