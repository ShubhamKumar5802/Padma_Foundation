const btnHome = document.querySelector('#btnHome');
const btnDonors = document.querySelector('#btnDonors');
const btnVolenteers = document.querySelector('#btnVolenteers');
const btnGallery = document.querySelector('#btnGallery');
const navItems = document.querySelectorAll(".header__container__list--item");

navItems.forEach((e) => {

    e.addEventListener("mouseover", () => {
      e.classList.add('active');
    });
    e.addEventListener("mouseout", () => {
      e.classList.remove('active');
    });
  });
btnHome.addEventListener('click', () => {
    location.href = ('../../index.html');
  });
  btnDonors.addEventListener('click', () => {
    location.href = '../donors.html';
  });
  btnVolenteers.addEventListener('click', () => {
    location.href = '../volunteer.html';
  });
  btnGallery.addEventListener('click', () => {
    location.href = ('../gallery.html');
  });