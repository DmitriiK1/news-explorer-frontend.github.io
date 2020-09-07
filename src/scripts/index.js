// import '../blocks/styles.css';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

function openMenu() {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
}

burger.addEventListener('click', () => {
  openMenu();
});
