// Список попапов
const popUps = [".search-popup", ".login-popup", ".catalogue-popup"];

// Закрытие всех попапов
const closeAllPopUp = () => {
  popUps.forEach((name) => {
    const item = document.querySelector(name);
    item.classList.remove("active");
  });
};

// Инициализация попапа
const popUpInit = (open, close, body) => {
  const openPopUp = document.querySelector(open);
  const closePopUp = document.querySelector(close);
  const popUp = document.querySelector(body);

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    closeAllPopUp();
    popUp.classList.add("active");
  });

  closePopUp.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.remove("active");
  });
};

// Форма поиска
popUpInit(".open-search-popup", ".close-search-popup", ".search-popup");

// Форма логина
popUpInit(".open-login-popup", ".close-login-popup", ".login-popup");

// Попап каталога
popUpInit(".catalogue", ".close-catalogue-popup", ".catalogue-popup");

// Форма обратной связи

const openCallPopUp = document.querySelector(".openCallPopUp");
const closeCallPopUp = document.querySelector(".closeCallPopUp");
const callBackPopUp = document.querySelector(".popup-bg");
const body = document.querySelector("body");

openCallPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  callBackPopUp.classList.add("active");
  fixedWindow();
});

closeCallPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  callBackPopUp.classList.remove("active");
  freeWindows();
});

// Заблокировать окно

const fixedWindow = () => {
  if (openCallPopUp) {
    body.classList.add("fixed");
  }
};

// Разблокировать окно

const freeWindows = () => {
  if (closeCallPopUp) {
    body.classList.remove("fixed");
  }
};

// Функция закрытия формы обратной связи по бэку
const closeModalOnSpace = (namePopUps) => {
  const callBackContent = document.querySelector(".popup-body");

  namePopUps.addEventListener("click", (e) => {
    if (e.target === callBackContent) {
      namePopUps.classList.remove("active");
      freeWindows();
    }
  });
};

closeModalOnSpace(callBackPopUp);

// Бургер
const hamb = document.querySelector(".hamb");
const burgerPopUp = document.querySelector(".burger-popup");
const menuBurger = document.querySelector(".top-navig");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  burgerPopUp.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("fixed");
}
