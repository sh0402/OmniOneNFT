// GNB SCROLL
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header');
  const headerHeight = header.offsetHeight;
  const section = document.querySelector('section');

  if (window.scrollY > headerHeight) {
    header.classList.add('fixed');
    section.classList.add('active');
  } else {
    header.classList.remove('fixed');
    section.classList.remove('active');
  }


  // const prodOption = document.querySelector('.prod-option'); // 스크롤 기준이 될 요소
  // const prodOptionHeight = prodOption.offsetHeight;
  // const floatItem = document.querySelector('#float'); // 플로팅 할 요소
  // const detailArea = document.querySelector('.detail-area');
  // const detailAreaTop = detailArea.offsetTop;
  // const detailAreaHeight = detailArea.offsetHeight;

  // if (window.scrollY >= prodOptionHeight) {
  //   floatItem.classList.add('show');
  // } else {
  //   floatItem.classList.remove('show');
  // }

  // if (window.scrollY >= ((detailAreaTop + detailAreaHeight) - prodOptionHeight)) {
  //   floatItem.classList.add('ele-none');
  // } else {
  //   floatItem.classList.remove('ele-none');
  // }
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


// // COUNTER 함수
// var increase = document.querySelector('.plus');
// var decrease = document.querySelector('.minus');
// var counterText = document.querySelector('.count-num');


// increase.onclick = () => {
//   var current = parseInt(counterText.innerText, 10)
//   counterText.innerText = current + 1;

//   console.log(counterText.innerText);
// }

// decrease.onclick = () => {
//   if (counterText.innerText > 0) {
//     var current = parseInt(counterText.innerText, 10)
//     counterText.innerText = current - 1;
//   }
// }

// MODAL 함수

document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
    if (target.hasAttribute('data-target')) {
      var m_ID = target.getAttribute('data-target');
      document.getElementById(m_ID).classList.add('open');
      e.preventDefault();
    }
  }

  // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
    var modal = document.querySelector('[class="modal open"]');
    modal.classList.remove('open');
    e.preventDefault();
  }
}, false);