import '../blocks/styles.css';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const headerButton = document.querySelector('.header__button');
const circlePreloaderPlace = document.querySelector('.circle-preloader_place');

function openMenu() {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
}

burger.addEventListener('click', () => {
  openMenu();
});

headerButton.addEventListener('click', () => {
  circlePreloaderPlace.classList.add('circle-preloader');
  setTimeout(() => {
    circlePreloaderPlace.classList.remove('circle-preloader');
  }, 1500);
});
