// BOTTOM FLOATING BUTTON
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

  // console.log(window.scrollY - ((detailArea.offsetTop + detailArea.offsetHeight) - prodOption.offsetHeight ));
})

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