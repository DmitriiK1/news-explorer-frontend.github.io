import '../blocks/styles.css';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const headerButton = document.querySelector('.header__button');
const circlePreloaderPlace = document.querySelector('.circle-preloader_place');

const headerLinkRounded = document.querySelector('.header__link-rounded');
const popup = document.querySelector('.popup');
const closePopups = document.querySelectorAll('.popup__close');
const enterAuthorization = document.querySelector('.popup__enter-authorization');
const popupAuthorization = document.querySelector('.popup-authorization');

headerLinkRounded.addEventListener('click', () => {
  popup.classList.add('popup_is-opened');
});
closePopups.forEach((closePopup) => {
  closePopup.addEventListener('click', () => {
    popup.classList.remove('popup_is-opened');
    popupAuthorization.classList.remove('popup_is-opened');
  });
});

enterAuthorization.addEventListener('click', (event) => {
  event.preventDefault();
  popupAuthorization.classList.add('popup_is-opened');
  popup.classList.remove('popup_is-opened');
});

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
