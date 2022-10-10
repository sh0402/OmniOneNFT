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


// var ALERT_TITLE = "Oops!";
// var ALERT_BUTTON_TEXT = "Ok";

// if(document.getElementById) {
//     window.alert = function(txt) {
//         createCustomAlert(txt);
//     }
// }

// function createCustomAlert(txt) {
//     d = document;

//     if(d.getElementById("modalContainer")) return;

//     mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
//     mObj.id = "modalContainer";
//     mObj.style.height = d.documentElement.scrollHeight + "px";

//     alertObj = mObj.appendChild(d.createElement("div"));
//     alertObj.id = "alertBox";
//     if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
//     alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
//     alertObj.style.visiblity="visible";

//     h1 = alertObj.appendChild(d.createElement("h1"));
//     h1.appendChild(d.createTextNode(ALERT_TITLE));

//     msg = alertObj.appendChild(d.createElement("p"));
//     //msg.appendChild(d.createTextNode(txt));
//     msg.innerHTML = txt;

//     btn = alertObj.appendChild(d.createElement("a"));
//     btn.id = "closeBtn";
//     btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
//     btn.href = "#";
//     btn.focus();
//     btn.onclick = function() { removeCustomAlert();return false; }

//     alertObj.style.display = "block";

// }

// function removeCustomAlert() {
//     document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
// }