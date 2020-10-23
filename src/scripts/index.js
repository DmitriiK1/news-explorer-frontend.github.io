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
const signupForm = document.querySelector('.popup-authorization .popup__form');

const API_URL = 'http://localhost:3001';

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.querySelector('input[name="name"]').value;
  const email = event.target.querySelector('input[name="email"]').value;
  const password = event.target.querySelector('input[name="password"]').value;
  const data = {
    name,
    email,
    password,
  };
  const url = `${API_URL}/signup`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
    .then((resData) => {
      const { message, name, email } = resData;
      if (message) {
        alert('Во время запроса произошла ошибка');
      } else {
        alert('Переключиться на Sign In');
      }
      console.log(resData);
    })
    .catch((err) => {
      alert('Во время запроса произошла ошибка');
      console.log(err);
    });
});

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
