// Список попапов
const popUps = [
  ".search-popup",
  ".login-popup",
  ".catalogue-popup",
  ".cart-popup",
];

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

// Попап корзины
popUpInit(".open-cart-popup", ".close-cart-popup", ".cart-popup");
