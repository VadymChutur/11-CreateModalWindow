const butOpenRef = document.querySelectorAll('.modal-show');
const butCloseRef = document.querySelectorAll('.modal-close');
const clickMouseOpenModalRef = document.querySelectorAll('.modal-wrap');
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

butOpenRef.forEach((element) => (element.onclick = toggleModal));

butCloseRef.forEach((element) => (element.onclick = toggleModal));

clickMouseOpenModalRef.forEach((element) => (element.onclick = closeModalWrap));

function toggleModal() {
  const modalId = this.dataset.modal;
  const modalRef = document.querySelector(modalId);
  console.log(modalRef.parentElement.classList);
  console.log(modalRef.classList);
  modalRef.parentElement.classList.toggle('hide');
  modalRef.classList.toggle('hide');
  //   console.log(modalId);
}

function closeModalWrap() {
  const modalWrapRef = this.children;
  modalWrapRef[0].classList.toggle('hide');
  this.classList.toggle('hide');
}
