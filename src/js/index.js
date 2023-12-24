import '../scss/style.scss';


let screenTb = 768;
let screenDt = 1120;

if (window.innerWidth < screenTb) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 16,

  });
}

let sidebar = document.querySelector('.sidebar');
let btnSidebar = document.querySelectorAll('.button_close');

if (window.innerWidth < screenDt) {
  for (let i = 0; i < btnSidebar.length; i++) {
    btnSidebar[i].addEventListener("click", function() {
      sidebar.classList.toggle('sidebar__active');
    });
  }
}

let modal = document.querySelectorAll('.modal');
let btnModal = document.querySelectorAll('.modalButton');

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener("click", function() {
    modal[i].classList.toggle('modal__open');
    sidebar.classList.toggle('sidebar__active');
  });
}

for (let i = 0; i < modal.length; i++) {
  let btnHeader = modal[i].querySelector('.modalButton');
  console.log(btnHeader);
  btnHeader.addEventListener("click", function() {
    modal[i].classList.toggle('modal__open');
  });
}





/*
let sidebar = document.querySelector('.sidebar');
let modal = document.querySelectorAll('.modal');

let btnModal = sidebar.querySelector('.contacts');
let btn = btnModal.querySelectorAll('.button_close');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    modal[i].classList.toggle('modal__open');
    sidebar.classList.toggle('sidebar__active');
  });
}

for (let i = 0; i < modal.length; i++) {
  let modalBtn = modal[i].querySelector('.button_close');
  modalBtn.addEventListener("click", function() {
    modal[i].classList.toggle('modal__open');
  });
}

let header = document.querySelector('.header');
let headerSidebar = document.querySelector('.sidebar__header');
let btnOpen = header.querySelector('.button_close');
let btnClose = headerSidebar.querySelector('.button_close');

btnOpen.addEventListener("click", function() {
  sidebar.classList.toggle('sidebar__active');
});

btnClose.addEventListener("click", function() {
  sidebar.classList.toggle('sidebar__active');
});

 */

/*
modalFeedback.addEventListener("click", function() {
  modal[0].classList.toggle('modal__open');
  sidebar.classList.toggle('sidebar__active');
});

modalCall.addEventListener("click", function() {
  modal[1].classList.toggle('modal__open');
  sidebar.classList.toggle('sidebar__active');
});
alert('dfj');
  sidebar.classList.toggle('sidebar__active');
  console.log('sldkmf');

let sidebar = document.querySelector('.sidebar__wrapper');
let btnSidebar = document.querySelector('.header__button');
let span = document.getElementsByClassName("close")[0];

btnSidebar.onclick = function () {
  sidebar.style.display = 'flex';
}

span.onclick = function () {
  sidebar.style.display = 'none';
}

window.onclick = function (evt) {
  if (evt.target === sidebar) sidebar.style.display = 'none';
}

 */

