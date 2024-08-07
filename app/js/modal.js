const butOpenRef = document.querySelectorAll('.modal-show');
const butCloseRef = document.querySelectorAll('.modal-close');
const modalWrapRef = document.querySelectorAll('.modal-wrap');

// const escOnKeyDouwnRef = window;
// const escOnKeyDouwnRef = (document.onkeydown = (event) => {
//   console.log(event);
//   if (event.keyCode === 27) {
//     clickMouseOpenModalRef.forEach((element) => {
//       element.classList.toggle('hide');
//       console.log(element.children);
//       element.children[0].classList.toggle('hide');
//     });
//   }
// });

// console.log(butOpenRef);

// console.log(escOnKeyDouwnRef);
// escOnKeyDouwnRef.addEventListener('keydown', closeModalWindowWithEsc);

function closeModalWindowWithEsc() {
  console.log('start');
  window.addEventListener(
    'keydown',
    (event) => {
      closePressEsc(event);
    },
    { once: true }
  );
}

function closePressEsc(event) {
  console.log('start 2');
  console.log(event);
  if (event.keyCode === 27) {
    const modalRef = document.querySelectorAll('.modal');
    modalRef[0].parentElement.classList.toggle('hide');
    modalRef[0].classList.toggle('hide');
    console.log(modalRef[0].parentElement.classList);
  }
}

butOpenRef.forEach((element) => (element.onclick = toggleModal));

// butCloseRef.forEach((element) => {
//   //   element.onclick = toggleModal;
//   element.addEventListener('click', (event) => {
//     console.log(element);
//   });
// });

modalWrapRef.forEach((element) => (element.onclick = closeModalWrap));

function toggleModal() {
  const modalId = this.dataset.modal;
  const modalRef = document.querySelector(modalId);
  closeModalWindowWithEsc();
  //   console.log(modalRef.parentElement.classList);
  //   console.log(modalRef.classList);
  modalRef.parentElement.classList.toggle('hide');
  modalRef.classList.toggle('hide');
  //   console.log(modalId);
}

function closeModalWrap() {
  const modalWrapRef = this.children;
  modalWrapRef[0].classList.toggle('hide');
  this.classList.toggle('hide');
}
