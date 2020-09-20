const bodyElement = document.querySelector(`body`);
const headerElement = bodyElement.querySelector(`.header`);
const headerTitleElement = bodyElement.querySelector(`.header__title`);
const headerLogoElement = headerElement.querySelector(`.header__logo`);
const hamburgerElement = headerElement.querySelector(`.hamburger`);
const searchElement = headerElement.querySelector(`.search`);
const searchBtnOpen = searchElement.querySelector(`.search__btn-open`);
const searchFormElement = searchElement.querySelector(`.search__form`);
const menuElement = headerElement.querySelector(`.menu`);

const headerHeight = 115;
const minHeight = 70;

const toggleClass = (element, cls) => {
  if (element.classList.contains(cls)) {
    element.classList.remove(cls);
  } else {
    element.classList.add(cls);
  }
};


const hamburgerClickHandler = function () {
  toggleClass(headerElement, `header--menu-open`);
  headerElement.classList.remove(`header--visibility`);

  if (searchElement.classList.contains(`search--open`)) {
    toggleClass(searchElement, `search--open`);
  }
  if (window.innerWidth > 1280) {
    toggleClass(headerTitleElement, `opacity`);
  }
  if (window.innerWidth < 768) {
    toggleClass(searchElement, `search--mobile-show`);
  }
};

hamburgerElement.addEventListener(`click`, hamburgerClickHandler);

// searchBtnOpen.addEventListener(`click`, () => {
//   toggleClass(searchElement, `search--open`);
// });

window.addEventListener(`scroll`, () => {
  let opacity = 0;

  if (window.scrollY <= 0) {
    opacity = 1;
  } else if (window.scrollY <= minHeight) {
    opacity = 1 - window.scrollY / minHeight;
  }

  headerTitleElement.style.opacity = opacity;

  if (opacity === 0) {
    headerElement.classList.add(`header--visibility`);
  } else {
    headerElement.classList.remove(`header--visibility`);
  }


  if (window.innerWidth < 768) {


    if (opacity === 0) {
      headerElement.classList.add(`header--shadow`);
    } else {
      headerElement.classList.remove(`header--shadow`);
    }

    if (window.scrollY > 0 && window.scrollY < 65) {
      headerElement.style.height = (115 - window.scrollY) + `px`;
    }

    if (window.scrollY === 0) {
      headerElement.style.height = 115 + `px`;
    }
    if (window.scrollY > 65) {
      headerElement.style.height = (115 - 65) + `px`;
    }
  } else {
    headerLogoElement.style.opacity = opacity;

    if (window.scrollY > 0) {
      headerElement.classList.add(`header--shadow`);
    } else {
      headerElement.classList.remove(`header--shadow`);
    }
  }
});

scrollBy(0, 1); // Делаем минимальную прокрутку для активации меню
