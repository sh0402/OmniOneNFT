// COUNTER 함수
window.addEventListener('scroll', () => {
  const prodOption = document.querySelector('.prod-option'); // 스크롤 기준이 될 요소
  const prodOptionHeight = prodOption.offsetHeight;
  const floatItem = document.querySelector('#float'); // 플로팅 할 요소
  const detailArea = document.querySelector('.detail-area');
  const detailAreaTop = detailArea.offsetTop;
  const detailAreaHeight = detailArea.offsetHeight;

  if (window.scrollY >= prodOptionHeight) {
    floatItem.classList.add('show');
  } else {
    floatItem.classList.remove('show');
  }

  if (window.scrollY >= ((detailAreaTop + detailAreaHeight) - prodOptionHeight)) {
    floatItem.classList.add('ele-none');
  } else {
    floatItem.classList.remove('ele-none');
  }
})

// COUNTER 함수
var increase = document.querySelector('.btn-plus');
var decrease = document.querySelector('.btn-minus');
var counterText = document.querySelector('.count-num');

increase.onclick = () => {
  var current = parseInt(counterText.innerText, 10)
  counterText.innerText = current + 1;

  console.log(counterText.innerText);
}

decrease.onclick = () => {
  if (counterText.innerText > 0) {
    var current = parseInt(counterText.innerText, 10)
    counterText.innerText = current - 1;
  }
}