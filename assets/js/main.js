// GNB SCROLL
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header');
  const headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

window.addEventListener('scroll', () => {

  var prodOption = document.querySelector('.prod-option'); // 스크롤 기준이 될 요소
  var floatItem = document.querySelector('#float'); // 플로팅 할 요소
  var detailArea = document.querySelector('.detail-area');

  if (window.scrollY >= prodOption.offsetHeight) {
    floatItem.classList.add('show');
  } else {
    floatItem.classList.remove('show');
  }

  if (window.scrollY >= ((detailArea.offsetTop + detailArea.offsetHeight) - prodOption.offsetHeight)) {
    floatItem.classList.add('ele-none');
  } else {
    floatItem.classList.remove('ele-none');
  }
})


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