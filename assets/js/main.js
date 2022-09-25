window.addEventListener('load', function () {
  const allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function (el) {
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
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

// function detailLeftFixed() {
//   const leftArea = document.querySelector('.left-area');
//   const leftAreaHeight = leftArea.offsetHeight;

//   if (window.scrollY > leftAreaHeight) {
//     leftArea.classList.add('fixed');
//   }
// }

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

// SELECT BOX 함수
const selectBoxElements = document.querySelectorAll('#select');

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle('active');
}

// OPTION VALUE 선택 함수
function selectOption(optionElement) {
  const selectBox = optionElement.closest('#select');
  const selectedElement = selectBox.querySelector('.selected-value');
  selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach((selectBoxElement) => {
  selectBoxElement.addEventListener('click', function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains('option');

    if (isOptionElement) {
      selectOption(targetElement);
    }

    toggleSelectBox(selectBoxElement);
  });
});

// SELECT CLOSE 함수
document.addEventListener('click', function (e) {
  const targetElement = e.target;
  const isSelect =
    targetElement.classList.contains('select') ||
    targetElement.closest('#select');

  if (isSelect) {
    return;
  }

  const allSelectBoxElements = document.querySelectorAll('#select');

  allSelectBoxElements.forEach((boxElement) => {
    boxElement.classList.remove('active');
  });
});



// COUNTER 함수
const increase = document.querySelector('.plus');
const decrease = document.querySelector('.minus');
const counterText = document.querySelector('.count-num');


increase.onclick = () => {
  const current = parseInt(counterText.innerText, 10)
  counterText.innerText = current + 1;

  console.log(counterText.innerText);
}

decrease.onclick = () => {

  if (counterText.innerText > 0) {
    const current = parseInt(counterText.innerText, 10)
    counterText.innerText = current - 1;
  }
}


