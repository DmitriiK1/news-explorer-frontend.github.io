import '../../blocks/articles.css';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const headerList = document.querySelector('.header__list');
const headerLinkRounded = document.querySelector('.header__link-rounded');

function openMenu() {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  logo.classList.toggle('active');
  headerList.classList.toggle('active');
  headerLinkRounded.classList.toggle('active');
}
burger.addEventListener('click', () => {
  openMenu();
});
