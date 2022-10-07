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


// MODAL 함수
document.addEventListener('click', function (e) {
  e = e || window.event;
  // var target = e.target || e.srcElement || e.target.parentElement;
  var target = e.target || e.srcElement;
  var body = document.body;
  var modal = document.querySelector('[class="modal open"]');

  console.log(target);

  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
    if (target.hasAttribute('data-target')) {
      var m_ID = target.getAttribute('data-target');
      document.getElementById(m_ID).classList.add('open');
      body.classList.add('open');
      e.stopPropagation();

      if (!modal) return;

      if (modal) {
        modal.classList.remove('open')
      }
    }
  }

  // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
    var modal = document.querySelector('[class="modal open"]');
    modal.classList.remove('open');
    body.classList.remove('open');
    e.stopPropagation();
  }

}, false);

document.addEventListener('keydown', (e) => {
  const modal = document.querySelector('[class="modal open"]');
  if (!modal) return;

  const keyDown = e.keyCode;

  if (keyDown === 27) {
    modal.classList.remove('open');
    document.body.classList.remove('open');
  }
}); //ESC로 모달 닫기

// document.addEventListener('click', function (e) {\
// if(e.target.classList.contains('open')) {
//   e.target.classList.remove('open');
//   this.body.classList.remove('open');
// }
// }); //외부 클릭 모달 닫기